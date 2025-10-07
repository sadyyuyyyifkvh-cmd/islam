checkBtn.addEventListener('click', ()=>{
  const val = Number(answerInput.value.trim()); // trim للتخلص من الفراغات وتحويل لأي رقم
  if(!isNaN(val) && val === a + b){
    confirmBtn.style.display = 'inline-block';
    confirmBtn.classList.add('is-visible');
    confirmBtn.focus();
    alert('✅ صحيح! دابا ضغط على "تأكيد" باش تشاهد الروابط');
  } else {
    alert('❌ جواب خاطئ، جرّب ثاني');
    generateCaptcha();
  }
});