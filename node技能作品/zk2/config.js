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
        this.writeIndex();
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
    getContent() {
        this.jn = 0; //保存 js文件的个数
        this.parr = []; //保存promise实例
        this.modules.forEach(item => {
            if (item.type == "script") { //判断是js代码的文件
                this.jn = item.files.length;
                item.files.forEach(item => {
                    this.parr.push(this.readfile(item)) //把该promise实例放到数组中
                })
            } else if (item.type == "style") { //判断是css代码的文件
                item.files.forEach(item => {
                    this.parr.push(this.readfile(item)); //把该promise实例放到数组中
                })
            }
        })
    }
    writeIndex() {
        let js = ''; //保存js代码内容
        let css = ''; //保存css代码内容 
        Promise.all(this.parr).then(res => { //promise实例全部成功时执行下面的代码
            for (let i = 0; i < this.jn; i++) {
                js += res[i]; //js 的代码内容
            }
            for (let i = this.jn; i < res.length; i++) {
                css += res[i]; // css 的代码内容
            }
            // console.log(js)
            // console.log(css);
            this.readfile(this.template).then((res) => {
                //替换模板中的内容
                let html = res.replace("<!--injection style-->", `<style>${css}</style>`); //生成style标签
                let htmln = html.replace("<!--injection script-->", `<script>${js}</script>`); //生成script标签
                fs.writeFileSync(this.output, htmln); //把替换后的内容写入目标新文件
                console.log("生成成功");
            });
        })
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