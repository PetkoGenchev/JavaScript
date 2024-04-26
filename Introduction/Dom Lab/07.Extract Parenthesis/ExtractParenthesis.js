function extract(content) {
    var fullText = document.getElementById('content');

    let pattern = /\(([^(]+)\)/g;

    let matches = fullText.textContent.matchAll(pattern);
    
}