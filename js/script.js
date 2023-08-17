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


        const textarea = document.getElementById('editor');
        const increaseSizeButton = document.getElementById('font-size-increase');
        const inputSizeButton = document.getElementById('font-size-input');
        const decreaseSizeButton = document.getElementById('font-size-decrease');
        
        let fontSize = parseFloat(inputSizeButton.value);

        increaseSizeButton.addEventListener('click', function() {
            fontSize += 2;
            updateFontSize(fontSize);
        });

        decreaseSizeButton.addEventListener('click', function() {
            fontSize -= 2;
            updateFontSize(fontSize);
        });

        inputSizeButton.addEventListener('input', function() {
            let newSize = parseFloat(inputSizeButton.value, 10);
            if (!isNaN(newSize)) {
                updateFontSize(newSize);
            }
        });

        function updateFontSize(newSize) {
            if (newSize < 10) {
                newSize = 10; // Minimum font size
            }
            textarea.style.fontSize = newSize + 'px';
            inputSizeButton.value = newSize;

        }