document.getElementById('bold-btn').addEventListener('click', function(){
    setTextStyle('bold-btn', 'font-bold');
});

document.getElementById('italic-btn').addEventListener('click', function(){
    setTextStyle('italic-btn', 'italic');
});

document.getElementById('underline-btn').addEventListener('click', function(){
    setTextStyle('underline-btn', 'underline');
});

const alignLeftBtn = document.getElementById('text-left');
const alignCenterBtn = document.getElementById('text-center');
const alignRightBtn = document.getElementById('text-right');

alignLeftBtn.addEventListener('click', function(){
        setTextAlignment('text-left', alignLeftBtn);
        
});

alignCenterBtn.addEventListener('click', function(){
        setTextAlignment('text-center', alignCenterBtn);
});

alignRightBtn.addEventListener('click', function(){
        setTextAlignment('text-right', alignRightBtn);
});