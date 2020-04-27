function showContent() {
    setTimeout(document.getElementById("body").style.display = "block", 500);
}

function showOptions() {
    document.getElementById("searchOptionsWrapper").style.display = "block";
    document.getElementById("search-cover").style.height = "43vh";
    document.getElementById("search-cover").style.borderRadius = "4vh";
}

function tryHideOptions() {
    setTimeout(hideOptions, 200);
}

function hideOptions() {
    document.getElementById("searchOptionsWrapper").style.display = "none";
    document.getElementById("search-cover").style.height = "auto";
    document.getElementById("search-cover").style.borderRadius = "100vh";
}

function search() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    if (input.value === "") {
        hideOptions()
    } else  {
        showOptions()
        filter = input.value.toUpperCase();
        ul = document.getElementById("searchOptions");
        li = ul.getElementsByClassName("options-body");
        let isShowing = false;
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByClassName("options-name")[0];
            txtValue = a.textContent
                || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                if (txtValue === "No result found") {
                    li[i].style.display = "none";
                } else  if (input.value.substring(0,1) === " ") {
                    li[i].style.display = "none";
                }else{
                    isShowing = true;
                    li[i].style.display = "";
                }
            } else {
                li[i].style.display = "none";
            }
        }
        if (!isShowing) {
            document.getElementById("noResult").style.display = "";
        } else {
            document.getElementById("noResult").style.display = "none";
        }
    }
}

function changeSearch(_this) {
    document.getElementById("search").value = _this.textContent;
    tryHideOptions()
}
