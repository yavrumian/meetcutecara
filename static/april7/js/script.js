$('#cancel').click((e) => {
    e.preventDefault()
    alert('There\'s no way back')
})

$('#reset').click((e) => {
    e.preventDefault()
    alert('Shame on you!!!!')
})

$('#login-form').submit((e) => {
    e.preventDefault()
    if($('[name="psw"]').val() != 'vahekara2002') alert('HOW YOU DARE!!')
    else{
        alert('awwwww ^_^')
        $('.modal').hide()
        $('.body').show()
    }
})
