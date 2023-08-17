function setTextStyle(class1, class2){
    const editorText = document.getElementById('editor');
    editorText.classList.toggle(class2);
    const btn = document.getElementById(class1);
    btn.classList.toggle('dark:text-white');
    btn.classList.toggle('dark:bg-gray-600');
 
}   
