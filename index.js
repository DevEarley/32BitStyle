

(function init(){
	let searchInput = document.getElementById("search-input");
	let articles = document.getElementById("articles");
	(function getArticles() {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', 'articles.json', true);
		xhr.onload = function(){
			if(this.status === 200){
				console.log(this.responseText);
				let articles = JSON.parse(xhr.responseText);
			}
		};
		xhr.send();
	})();

	(function initSearchInput() {
		searchInput.onkeyup = onSearch();
		searchInput.onblur = onSearch();
	})();

	function onSearch() {
		let searchValue = searchInput.value;
		
	}
	function buildRow(article){
		return "<tr>"+
			`<td><img src="source-${article.source}.png"></td>`+

			`<td><a href="${article.link}">${article.name}</a></td>`+
		"<tr>";
	
	}
	}

})();