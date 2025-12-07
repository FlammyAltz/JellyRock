function loadSite() {
    let url = document.getElementById("url-input").value;
    if (!url.startsWith("http")) {
        url = "https://" + url;
    }
    
    document.getElementById("browser-frame").src = url;
}
