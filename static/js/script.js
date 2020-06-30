$('button').click((e) => {
	const link = $(e.target).attr("link")
	const text = $(e.target).attr("text")
    $('img').attr('src', link)
    $('h2').text(text)
    window.scrollTo(0, 0);
})