function SubA(what){
    
    subjectaa = document.getElementById('subject-a-a').value
    subjectab = document.getElementById('subject-a-b').value

    numaa = parseInt(subjectaa)
    numab = parseInt(subjectab)

    if(what == "real-result"){

        ExamA = ( 90 - (numaa+numab) ) * 2
        if(ExamA < 100){ //성취도 A
            document.getElementById('subject-a-result').innerHTML = "수행평가 점수가 위와 같을 때, 기말 점수가 적어도 " + String(ExamA) + "점 이상이여야 성취도 A 입니다."
        }
        if(ExamA > 100){
            ExamA = ( 80 - (numaa+numab) ) * 2
            document.getElementById('subject-a-result').innerHTML = "성취도 A를 받을 수 없습니다."
        }
    }
    if(what=="other-result"){
        ExamA_B = ( 80 - (numab+numab) ) * 2
        ExamA_C = ( 70 - (numab+numab) ) * 2
        ExamA_D = ( 60 - (numaa+numab) ) * 2
        ExamA_E = ( 50 - (numaa+numab) ) * 2

        alert(String(ExamA_B) + "점을 맞으면 성취도 B, " + String(ExamA_C) + "점을 맞으면 성취도 C, " + String(ExamA_D) + "점을 맞으면 성취도 D, " + String(ExamA_E) + "점을 맞으면 성취도 E입니다.")
    }

    //alert(ExamA)
        
}

function SubB(what){
    subjectba = document.getElementById('subject-b-a').value //중간고사 점수
    subjectbb = document.getElementById('subject-b-b').value //말하기 수행 점수
    subjectbc = document.getElementById('subject-b-c').value //7과단어
    subjectbd = document.getElementById('subject-b-d').value //8과단어
    subjectbe = document.getElementById('subject-b-e').value //쓰기 수행

    numba = parseInt(subjectba)
    numbb = parseInt(subjectbb)
    numbc = parseInt(subjectbc)
    numbd = parseInt(subjectbd)
    numbe = parseInt(subjectbe)

    if(what == "real-result"){
        ExamB = (( 90 - ((35*numba/100)+numbb+numbc+numbd+numbe) ) * 100 ) / 35

        //alert(ExamB)
        if(ExamB < 100){
            document.getElementById('subject-b-result').innerHTML = "수행평가 점수가 위와 같을 때, 기말 점수가 적어도 " + String(Math.round(ExamB)) + "점 이상이여야 성취도 A 입니다."
        }
        if(ExamB > 100){
            document.getElementById('subject-b-result').innerHTML = "성취도 A를 받을 수 없습니다."
        } //!A{}
    }
    if(what=="other-result"){
        // ExamB_B = (( 80 - ((35*numba/100)+numbb+numbc+numbd+numbe) ) * 100 ) / 35
        // ExamB_C = (( 70 - ((35*numba/100)+numbb+numbc+numbd+numbe) ) * 100 ) / 35
        // ExamB_D = (( 60 - ((35*numba/100)+numbb+numbc+numbd+numbe) ) * 100 ) / 35
        // ExamB_E = (( 50 - ((35*numba/100)+numbb+numbc+numbd+numbe) ) * 100 ) / 35

        // alert(String(Math.round(ExamB_B)) + "점을 맞으면 성취도 B, " + String(Math.round(ExamB_C)) + "점을 맞으면 성취도 C, " + String(Math.round(ExamB_D)) + "점을 맞으면 성취도 D, " + String(Math.round(ExamB_E)) + "점을 맞으면 성취도 E입니다.")
        alert('영어는 release 1.0버전 때 활성화됩니다.')
    }

}

function SubC(what){
    subjectca = document.getElementById('subject-c-a').value
    subjectcb = document.getElementById('subject-c-b').value
    subjectcc = document.getElementById('subject-c-c').value
    subjectcd = document.getElementById('subject-c-d').value

    numca = parseInt(subjectca)
    numcb = parseInt(subjectcb)
    numcc = parseInt(subjectcc)
    numcd = parseInt(subjectcd)

    if(what== "real-result"){
        ExamC = ( ( 90 - ((30*numca/100)+numcb+numcc+numcd) ) * 100) / 30
        if (ExamC < 100){
            document.getElementById('subject-c-result').innerHTML = "수행평가 점수가 위와 같을 때, 기말 점수가 적어도 " + String(Math.round(ExamC)) + "점 이상이여야 성취도 A 입니다."
        }
        if(ExamC > 100){
            document.getElementById('subject-c-result').innerHTML = "성취도 A를 받을 수 없습니다."
        }
    }
    if(what=="other-result"){
        alert('수학은 release 1.0버전 때 활성화됩니다.')
    }

}

function SubD(what){
    subjectda = document.getElementById('subject-d-a').value
    subjectdb = document.getElementById('subject-d-b').value

    numda = parseInt(subjectda)
    numdb = parseInt(subjectdb)

    if(what== "real-result"){
        ExamD = ( 90 - (numda+numdb)) * 2
        if(ExamD < 100){
            document.getElementById('subject-d-result').innerHTML = "수행평가 점수가 위와 같을 때, 기말 점수가 적어도 " + String(ExamD) + "점 이상이여야 성취도 A 입니다."
        }
        if(ExamD > 100){
            document.getElementById('subject-d-result').innerHTML = "성취도 A를 받을 수 없습니다."
        }
    }
    if(what=="other-result"){
        ExamD_B = ( 80 - (numdb+numdb) ) * 2
        ExamD_C = ( 70 - (numdb+numdb) ) * 2
        ExamD_D = ( 60 - (numda+numdb) ) * 2
        ExamD_E = ( 50 - (numda+numdb) ) * 2

        alert(String(ExamD_B) + "점을 맞으면 성취도 B, " + String(ExamD_C) + "점을 맞으면 성취도 C, " + String(ExamD_D) + "점을 맞으면 성취도 D, " + String(ExamD_E) + "점을 맞으면 성취도 E입니다.")
    }

}

function SubE(what){
    subjectea = document.getElementById('subject-e-a').value
    subjecteb = document.getElementById('subject-e-b').value

    numea = parseInt(subjectea)
    numeb = parseInt(subjecteb)

    if(what=="real-result"){
        ExamE = ( 90 - (numea+numeb)) * 2
        if(ExamE < 100){
            document.getElementById('subject-e-result').innerHTML = "수행평가 점수가 위와 같을 때, 기말 점수가 적어도 " + String(ExamE) + "점 이상이여야 성취도 A 입니다."
        }
        if(ExamE >100){
            document.getElementById('subject-e-result').innerHTML = "성취도 A를 받을 수 없습니다."
        }
    }
    if(what=="other-result"){
        ExamE_B = ( 80 - (numeb+numeb) ) * 2
        ExamE_C = ( 70 - (numeb+numeb) ) * 2
        ExamE_D = ( 60 - (numea+numeb) ) * 2
        ExamE_E = ( 50 - (numea+numeb) ) * 2

        alert(String(ExamE_B) + "점을 맞으면 성취도 B, " + String(ExamE_C) + "점을 맞으면 성취도 C, " + String(ExamE_D) + "점을 맞으면 성취도 D, " + String(ExamE_E) + "점을 맞으면 성취도 E입니다.")
    }

}

function SubF(what){
    subjectfa = document.getElementById('subject-f-a').value
    subjectfb = document.getElementById('subject-f-b').value

    numfa = parseInt(subjectfa)
    numfb = parseInt(subjectfb)

    if(what == "real-result"){
        ExamF = ( 90 - (numfa+numfb)) * 2
        if(ExamF < 100){
            document.getElementById('subject-f-result').innerHTML = "수행평가 점수가 위와 같을 때, 기말 점수가 적어도 " + String(ExamF) + "점 이상이여야 성취도 A 입니다."
        }
        if(ExamF > 100){
            document.getElementById('subject-f-result').innerHTML = "성취도 A를 받을 수 없습니다."
        }
    }
    if(what=="other-result"){
        ExamF_B = ( 80 - (numfb+numfb) ) * 2
        ExamF_C = ( 70 - (numfb+numfb) ) * 2
        ExamF_D = ( 60 - (numfa+numfb) ) * 2
        ExamF_E = ( 50 - (numfa+numfb) ) * 2

        alert(String(ExamF_B) + "점을 맞으면 성취도 B, " + String(ExamF_C) + "점을 맞으면 성취도 C, " + String(ExamF_D) + "점을 맞으면 성취도 D, " + String(ExamF_E) + "점을 맞으면 성취도 E입니다.")
    }

}

function SubG(what){
    subjectga = document.getElementById('subject-g-a').value
    subjectgb = document.getElementById('subject-g-b').value

    numga = parseInt(subjectga)
    numgb = parseInt(subjectgb)

    if(what=="real-result"){

        ExamG = ( 90 - (numga+numgb)) * 2
        if(ExamG < 100){
            document.getElementById('subject-g-result').innerHTML = "   수행평가 점수가 위와 같을 때, 기말 점수가 적어도 " + String(ExamG) + "점 이상이여야 성취도 A 입니다."
        }
        if(ExamG > 100){
            document.getElementById('subject-g-result').innerHTML = "성취도 A를 받을 수 없습니다."
        }
    }
    if(what=="other-result"){
        ExamG_B = ( 80 - (numfb+numfb) ) * 2
        ExamG_C = ( 70 - (numfb+numfb) ) * 2
        ExamG_D = ( 60 - (numfa+numfb) ) * 2
        ExamG_E = ( 50 - (numfa+numfb) ) * 2

        alert(String(ExamG_B) + "점을 맞으면 성취도 B, " + String(ExamG_C) + "점을 맞으면 성취도 C, " + String(ExamG_D) + "점을 맞으면 성취도 D, " + String(ExamG_E) + "점을 맞으면 성취도 E입니다.")
    }

}