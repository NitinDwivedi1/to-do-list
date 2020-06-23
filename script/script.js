
function addnew()
{
    var li = document.createElement("li");
    var input=document.getElementById("input").value;
    var space=input.trim();
    var txt=document.createTextNode(input);
    li.appendChild(txt);
    if(space)
    {
        document.getElementById("allist").appendChild(li);
    }
    else
    {
        alert("Insert some text!!");
    }
    document.getElementById("input").value="";

    //hide
    
    var span=document.createElement("span");
    span.className="cancel";
    var t=document.createTextNode("\u00d7");
    span.appendChild(t);
    li.appendChild(span);
    var cancel=document.getElementsByClassName("cancel");
    for(var i=0;i<cancel.length;i++)
    {
        cancel[i].onclick = function(){
            var div = this.parentElement;
            div.style.display="none";
        }
    }

    //check the item

    var item=document.querySelector("ul");
    item.addEventListener("click",function(event)
    {
        if(event.target.tagName==="LI")
        {
            event.target.classList.toggle('checked');
        }
    });
}
