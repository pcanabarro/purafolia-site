function loadLayout() {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = '<div></div>';

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'Views/Shared/Layout.html', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            wrapper.firstChild.innerHTML = xhr.responseText;

            var layoutContentMain = wrapper.firstChild.querySelector('header');
            document.body.insertBefore(layoutContentMain, document.getElementById('conteudo'));

            var layoutContentFooter = wrapper.firstChild.querySelector('footer');
            document.body.insertBefore(layoutContentFooter, document.querySelector('footer'));

            var links = wrapper.firstChild.querySelectorAll('link');
            var scripts = wrapper.firstChild.querySelectorAll('script');
            
            var head = document.head;
            for (var i = 0; i < links.length; i++) {
                head.appendChild(links[i].cloneNode(true));
            }
            for (var j = 0; j < scripts.length; j++) {
                head.appendChild(scripts[j].cloneNode(true));
            }
        }
    };
    xhr.send();
};

function loadHeader(condition) {
    if(condition) {
        fetch('Views/Shared/Header.html')
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const html = parser.parseFromString(data, 'text/html');
                const conteudo = html.querySelector('#contentHeader');
                const headerContent = document.querySelector('header');
                headerContent.appendChild(conteudo);

                const styles = html.querySelectorAll('link[rel="stylesheet"]');
                styles.forEach(style => {
                const header = document.querySelector('head');
                header.appendChild(style.cloneNode(true));
                });
            }
        );
    }
}