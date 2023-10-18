
const output_year=document.querySelector(".output-year")
const output_month=document.querySelector(".output-month")
const output_day=document.querySelector(".output-day")
const submit_btn=document.querySelector(".submit-btn")
let isvalid=false;

const input_year=document.querySelector("#year")
const input_month=document.querySelector("#month")
const input_day=document.querySelector("#day")
// const submit_btn=document.querySelector(".submit_btn")
const error_year=document.querySelector(".error-year")
const error_month=document.querySelector(".error-month")
const error_day=document.querySelector(".error-day")
submit_btn.addEventListener('click',CalculateDate)
input_day.addEventListener("input", (e) =>{
    if(+input_day.value > 31 ){
        error_day.textContent="Must be a valid date";
        isvalid=false;
        return;
    }
    else{
        isvalid=true;
        
    }
    if(+input_day.value==31 && (+input_month==4 || +input_month==6 || +input_month==9 || +input_month==11)){
        error_day.textContent="Must be valid date";
        isvalid=false;
        return;
    }
    else{
        isvalid=true;
    }
    if(+input_day.value===0|| +input_day.value<0){
        isvalid=false;
        error_day.textContent="This field is requered";
        isvalid=false;
        return;
    }
    else{
        error_day.textContent=""
    }
})



input_month.addEventListener("input", (e) =>{
    if(+input_month.value > 12){
        error_month.textContent="Must be a valid date";
        isvalid=false;
        return;
    }
    else{
        isvalid=true;
        
    }
    if(+input_month.value===0 || +input_month.value<0){
        isvalid=false;
        error_month.textContent="This field is requered";
        isvalid=false;
        return;
    }
    else{
        error_month.textContent=""
    }
})




input_year.addEventListener("input", (e) =>{
    if(+input_year.value > 2023){
        error_yearinput_year.textContent="Must be a valid date";
        isvalid=false;
        return;
    }
    else{
        isvalid=true;
        
    }
    if(+input_year.value===0 || +input_year.value<0){
        isvalid=false;
        error_yearinput_year.textContent="This field is requered";
        isvalid=false;
        return;
    }
    else{
        error_yearinput_year.textContent=""
    }
})


function CalculateDate(){
    if(isvalid){
        let birthday=`${input_month.value} /${input_day.value} / ${input_year.value}`;
        console.log(birthday);
        let birthdayObj=new Date(birthday);
        let ageDiffMill=Date.now()-birthdayObj;
        let ageDate= new Date(ageDiffMill);
        let ageYears=ageDate.getUTCFullYear() - 1970;
        let ageMonth=ageDate.getUTCMonth();
        let ageDay=ageDate.getUTCDay()-1;
        output_day.textContent=ageDay;
        output_month.textContent=ageMonth;
        output_year.textContent=ageYears;
    }
    else{
        alert("error");
    }
}

