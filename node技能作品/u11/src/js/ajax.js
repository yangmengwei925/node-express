let ajax = (function() {
    let xhr = new XMLHttpRequest();

    function get(opt) {
        return new Promise((resolve, reject) => {
            let { url, async = true } = opt;
            xhr.open("get", url, async);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText))
                    } else {
                        reject(new Error())
                    }
                }
            }
            xhr.send(null);
        })

    }
    return {
        get
    }
})()