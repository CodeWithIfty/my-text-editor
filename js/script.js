document.getElementById('bold-btn').addEventListener('click', function(){
    setTextStyle('bold-btn', 'font-bold');
})

document.getElementById('italic-btn').addEventListener('click', function(){
    setTextStyle('italic-btn', 'italic');
})

document.getElementById('underline-btn').addEventListener('click', function(){
    setTextStyle('underline-btn', 'underline');
})

const alignLeftBtn = document.getElementById('text-left');
const alignCenterBtn = document.getElementById('text-center');
const alignRightBtn = document.getElementById('text-right');


    alignLeftBtn.addEventListener('click', function(){
        const textEditor = document.getElementById('editor');
        textEditor.classList.remove('text-center', 'text-right')
        textEditor.classList.add('text-left')
        alignCenterBtn.classList.remove('dark:text-white', 'dark:bg-gray-600')
        alignRightBtn.classList.remove('dark:text-white', 'dark:bg-gray-600')
        alignLeftBtn.classList.add('dark:text-white', 'dark:bg-gray-600')
        
    })

    alignCenterBtn.addEventListener('click', function(){
        const textEditor = document.getElementById('editor');
        textEditor.classList.remove('text-left', 'text-right');
        textEditor.classList.add('text-center');
        alignRightBtn.classList.remove('dark:text-white', 'dark:bg-gray-600');
        alignLeftBtn.classList.remove('dark:text-white', 'dark:bg-gray-600');
        alignCenterBtn.classList.add('dark:text-white', 'dark:bg-gray-600');
    })

    alignRightBtn.addEventListener('click', function(){
        const textEditor = document.getElementById('editor');
        textEditor.classList.remove('text-left', 'text-center')
        textEditor.classList.add('text-right')
        alignCenterBtn.classList.remove('dark:text-white', 'dark:bg-gray-600')
        alignLeftBtn.classList.remove('dark:text-white', 'dark:bg-gray-600')
        alignRightBtn.classList.add('dark:text-white', 'dark:bg-gray-600')
    })