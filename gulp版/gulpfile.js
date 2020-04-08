const gulp = require("gulp");
const sass = require("gulp-sass");
const css = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const webserver = require("gulp-webserver");
const fs = require("fs");
const path = require("path");
const url = require("url");
const querystring = require("querystring");
let shopData = require("./data/shop")
//编译sass  压缩
gulp.task("sass",()=>{
    return gulp.src("./src/sass/*.scss")
    .pipe(sass())  //编译
    .pipe(gulp.dest("./src/css"))  //拷贝
    .pipe(autoprefixer()) //添加前缀
    .pipe(css()) //压缩
    .pipe(concat("all.css")) //合并
    .pipe(gulp.dest("./dist/css"))  ////拷贝
})

//编译js 压缩
gulp.task("js",()=>{
    return gulp.src("./src/js/*.js")
    .pipe(babel({
        presets:["env"]
    }))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"))
})

//监听
gulp.task("watch",()=>{
    gulp.watch("./src/sass/*.scss",gulp.series("sass"))
    gulp.watch("./src/js/*.js",gulp.series("js"))
})

//加载静态资源
gulp.task("ser",()=>{
    return gulp.src("./src")
    .pipe(webserver({
        port:9090,
        livereload:true,
        open:true,
        proxies:[
            {source:"/getShop",target:"http://localhost:3000/getShop"}
        ]
    }))
})

//加载路由 数据
gulp.task("serD",()=>{
    return gulp.src(".")
    .pipe(webserver({
        port:3000,
        middleware:(req,res,next)=>{
            let {pathname,query} = url.parse(req.url,true)//接口 get携带的数据
            if(pathname==="/getShop/"){
                res.end(send(shopData))
            }



            function send(data){
              return  JSON.stringify(data)
            }
        }
    }))
})



gulp.task("default",gulp.parallel("watch","ser","serD"))