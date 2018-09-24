let blocks = document.querySelectorAll('.product_block');


for(let i = 0; i < blocks.length; i++){
	blocks[i].addEventListener('click', function(e){
		if(this.classList.contains('not_available')) return false;
		if(!this.classList.contains('active')) this.classList.add('active');
		else{
			this.classList.remove('active');
			if(!this.classList.contains('hover')) this.classList.add('hover');
		};
	})

}
