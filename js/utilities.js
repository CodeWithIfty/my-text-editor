function setTextStyle(class1, class2){
    const editorText = document.getElementById('editor');
    editorText.classList.toggle(class2);
    const btn = document.getElementById(class1);
    btn.classList.toggle('dark:text-white');
    btn.classList.toggle('dark:bg-gray-600');
 
}   

function setTextAlignment(btnClass, activeBtn){
    const textEditor = document.getElementById('editor');
        textEditor.classList.remove('text-center', 'text-right');
        textEditor.classList.add(btnClass);

        alignLeftBtn.classList.remove('dark:text-white', 'dark:bg-gray-600');
        alignCenterBtn.classList.remove('dark:text-white', 'dark:bg-gray-600');
        alignRightBtn.classList.remove('dark:text-white', 'dark:bg-gray-600');
        
        activeBtn.classList.add('dark:text-white', 'dark:bg-gray-600');
}