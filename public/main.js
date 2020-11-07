let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n+1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n+=1
    }
  };
  request.send();
};
getJSON.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('GET','5.json')
    request.onreadystatechange=()=>{
        if(request.readyState ===4 && request.status===200){
            const object = JSON.parse(request.response)
            myName.textContext = object.name
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/4.xml");
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      }
    };
    request.send();
  };

getHTML.onclick=()=>{
    const request= new XMLHttpRequest()
    request.open('GET','3.html')
    request.onload=()=>{
            const div = document.createElement('div')
            div.innerHTML = request.response
            document.body.appendChild(div)
    }
    request.onerror=()=>{}
    request.send()
}

getJS.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onload=()=>{
        //创建script标签
        const script = document.createElement('script')
        //填写script内容
        script.innerHTML = request.response
        //插到头里面
        document.head.appendChild(script)
    }
    request.onerror=()=>{}
    request.send()
}

getCSS.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('get','/style.css')
    request.onreadystatechange = ()=>{
        if(request.readyState===4){
            console.log('下载完成')
            if(request.status>=200 && request.status<300){
    
        //创建style标签
        const style = document.createElement('style')
        //填写style内容
        style.innerHTML = request.response
        //插到头里面
        document.head.appendChild(style)
            }else{
                alert('加载CSS失败')
            }
        }

    }
    
    request.send()
}
