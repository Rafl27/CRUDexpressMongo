function myfunction_click(){
    const data = {"title" : "teste funfando bem"}
    const options = {
        method: "PATCH",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch('http://localhost:3000/posts/628c3318518a95454137bd7c', options)
    }