document.addEventListener('DOMContentLoaded', function() {
	const pastaLink = document.getElementById('pastalink');
	const pizzaLink = document.getElementById('pizzalink');
	const varmLink = document.getElementById('varmlink');
    
	pastaLink.addEventListener('click', function(event) {
	    event.preventDefault();
	    const pastaHeader = document.getElementById('pasta1');
	    pastaHeader.scrollIntoView({ behavior: 'smooth' });
	});

	pizzaLink.addEventListener('click', function(event) {
		event.preventDefault();
		const pizzaHeader = document.getElementById('pizza1');
		pizzaHeader.scrollIntoView({ behavior: 'smooth' });
	});

	varmLink.addEventListener('click', function(event) {
		event.preventDefault();
		const varmHeader = document.getElementById('varm1');
		varmHeader.scrollIntoView({ behavior: 'smooth' });
	});
});