const fs = require('fs');
class Files {
    constructor(obj) {
        let { template, output, modules } = obj;
        this.template = template;
        this.output = output;
        this.modules = modules;
        this.init();
    };
    init() {
        this.getContent();
    }
    readfile(path) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, (err, data) => {
                if (err) {
                    reject(err.message)
                    return;
                }
                resolve(data.toString());
            })
        })
    }
    async getContent() {
        let html = '',
            css = '',
            js = '';
        for (let item of this.modules) {
            if (item.type == "script") {
                for (let i of item.files) {
                    js += await this.readfile(i);
                }
            } else if (item.type == "style") {
                for (let i of item.files) {
                    css += await this.readfile(i);
                }
            }
        }
        html = await this.readfile(this.template);
        html = await html.replace("<!--injection style-->", `<style>${css}</style>`);
        html = await html.replace("<!--injection script-->", `<script>${js}</script>`);
        // console.log(html);
        fs.writeFileSync(this.output, html);
    }
}

new Files({
    template: './src/index.html',
    output: 'index.html', //最终生成的文件路径
    modules: [{
            type: 'script',
            files: ['./src/static/js/index.js']
                //按照数组顺序 生成script标签放入到indexhtml中
        },
        {
            type: 'style',
            files: ['./src/static/css/common.css', './src/static/css/style.css']
                ////按照数组顺序 生成style标签放入到indexhtml中
        }
    ]
})