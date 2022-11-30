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

        ExamA_B = ( 80 - (numaa+numab) ) * 2
        ExamA_B_text = ""
        if(ExamA_B > 100){
            ExamA_B_text = "성취도 B를 맞을 수 없습니다."
        }
        if(ExamA_B < 100){
            ExamA_B_text = "적어도 " + String(Math.round(ExamA_B)) + "점을 맞으면 성취도 B입니다."
        }
        if(ExamA_B < 0){
            ExamA_B_text = "성취도 B는 나오지 않습니다."
        }

        ExamA_C = ( 70 - (numaa+numab) ) * 2
        ExamA_C_text = ""
        if(ExamA_C > 100){
            ExamA_C_text = "성취도 C를 맞을 수 없습니다."
        }
        if(ExamA_C < 100){
            ExamA_C_text = "적어도 " + String(Math.round(ExamA_C)) + "점을 맞으면 성취도 C입니다."
        }
        if(ExamA_C < 0){
            ExamA_C_text = "성취도 C는 나오지 않습니다."
        }

        ExamA_D = ( 60 - (numaa+numab) ) * 2
        ExamA_D_text = ""
        if(ExamA_D > 100){
            ExamA_D_text = "성취도 D를 맞을 수 없습니다."
        }
        if(ExamA_D < 100){
            ExamA_D_text = "적어도 " + String(Math.round(ExamA_D)) + "점을 맞으면 성취도 D입니다."
        }
        if(ExamA_D < 0){
            ExamA_D_text = "성취도 D는 나오지 않습니다."
        }

        ExamA_E = ( 50 - (numaa+numab) ) * 2
        ExamA_E_text = ""
        if(ExamA_E > 100){
            ExamA_E_text = "성취도 E를 맞을 수 없습니다."
        }
        if(ExamA_E < 100 ){
            ExamA_E_text = "적어도 " + String(Math.round(ExamA_E)) + "점을 맞으면 성취도 E입니다."
        }
        if(ExamA_E < 0){
            ExamA_E_text = "성취도 E는 나오지 않습니다."
        }

        alert(ExamA_B_text + ExamA_C_text + ExamA_D_text + ExamA_E_text)
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
    if(what=="other-result"){ //numbb+numbc+numbd+numbe = 35(if perfect score)
        
        ExamB_B = (( 80 - ((35*numba/100)+numbb+numbc+numbd+numbe) ) * 100 ) / 35
        ExamB_B_text = ""
        if(ExamB_B > 100){
            ExamB_B_text = "성취도 B를 맞을 수 없습니다."
        }
        if(ExamB_B < 100){
            ExamB_B_text = "적어도 " + String(Math.round(ExamB_B)) + "점을 맞으면 성취도 B입니다."
        }
        if(ExamB_B < 0){
            ExamB_B_text = "성취도 B는 나오지 않습니다."
        }

        ExamB_C = (( 70 - ((35*numba/100)+numbb+numbc+numbd+numbe) ) * 100 ) / 35
        ExamB_C_text = ""
        if(ExamB_C > 100){
            ExamB_C_text = "성취도 C를 맞을 수 없습니다."
        }
        if(ExamB_C < 100){
            ExamB_C_text = "적어도 " + String(Math.round(ExamB_C)) + "점을 맞으면 성취도 C입니다."
        }
        if(ExamB_C < 0){
            ExamB_C_text = "성취도 C는 나오지 않습니다."
        }

        ExamB_D = (( 60 - ((35*numba/100)+numbb+numbc+numbd+numbe) ) * 100 ) / 35
        ExamB_D_text = ""
        if(ExamB_D > 100){
            ExamB_D_text = "성취도 D를 맞을 수 없습니다."
        }
        if(ExamB_D < 100){
            ExamB_D_text = "적어도 " + String(Math.round(ExamB_D)) + "점을 맞으면 성취도 D입니다."
        }
        if(ExamB_D < 0){
            ExamB_D_text = "성취도 D는 나오지 않습니다."
        }

        ExamB_E = (( 50 - ((35*numba/100)+numbb+numbc+numbd+numbe) ) * 100 ) / 35
        ExamB_E_text = ""
        if(ExamB_E > 100){
            ExamB_E_text = "성취도 E를 맞을 수 없습니다."
        }
        if(ExamB_E < 100 ){
            ExamB_E_text = "적어도 " + String(Math.round(ExamB_E)) + "점을 맞으면 성취도 E입니다."
        }
        if(ExamB_E < 0){
            ExamB_E_text = "성취도 E는 나오지 않습니다."
        }

        alert(ExamB_B_text + ExamB_C_text + ExamB_D_text + ExamB_E_text)
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
        ExamC_B = ( ( 80 - ((30*numca/100)+numcb+numcc+numcd) ) * 100) / 30
        ExamC_B_text = ""
        if(ExamC_B > 100){
            ExamC_B_text = "성취도 B를 맞을 수 없습니다."
        }
        if(ExamC_B < 100){
            ExamC_B_text = "적어도 " + String(Math.round(ExamC_B)) + "점을 맞으면 성취도 B입니다."
        }
        if(ExamC_B < 0){
            ExamC_B_text = "성취도 B는 나오지 않습니다."
        }

        ExamC_C = ( ( 70 - ((30*numca/100)+numcb+numcc+numcd) ) * 100) / 30
        ExamC_C_text = ""
        if(ExamC_C > 100){
            ExamC_C_text = "성취도 C를 맞을 수 없습니다."
        }
        if(ExamC_C < 100){
            ExamC_C_text = "적어도 " + String(Math.round(ExamC_C)) + "점을 맞으면 성취도 C입니다."
        }
        if(ExamC_C < 0){
            ExamC_C_text = "성취도 C는 나오지 않습니다."
        }

        ExamC_D = ( ( 60 - ((30*numca/100)+numcb+numcc+numcd) ) * 100) / 30
        ExamC_D_text = ""
        if(ExamC_D > 100){
            ExamC_D_text = "성취도 D를 맞을 수 없습니다."
        }
        if(ExamC_D < 100){
            ExamC_D_text = "적어도 " + String(Math.round(ExamC_D)) + "점을 맞으면 성취도 D입니다."
        }
        if(ExamC_D < 0){
            ExamC_D_text = "성취도 D는 나오지 않습니다."
        }

        ExamC_E = ( ( 50 - ((30*numca/100)+numcb+numcc+numcd) ) * 100) / 30
        ExamC_E_text = ""
        if(ExamC_E > 100){
            ExamC_E_text = "성취도 E를 맞을 수 없습니다."
        }
        if(ExamC_E < 100 ){
            ExamC_E_text = "적어도 " + String(Math.round(ExamC_E)) + "점을 맞으면 성취도 E입니다."
        }
        if(ExamC_E < 0){
            ExamC_E_text = "성취도 E는 나오지 않습니다."
        }

        alert(ExamC_B_text + ExamC_C_text + ExamC_D_text + ExamC_E_text)
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

        ExamD_B = ( 80 - (numda+numdb) ) * 2
        ExamD_B_text = ""
        if(ExamD_B > 100){
            ExamD_B_text = "성취도 B를 맞을 수 없습니다."
        }
        if(ExamD_B < 100){
            ExamD_B_text = "적어도 " + String(Math.round(ExamD_B)) + "점을 맞으면 성취도 B입니다."
        }
        if(ExamD_B < 0){
            ExamD_B_text = "성취도 B는 나오지 않습니다."
        }

        ExamD_C = ( 70 - (numda+numdb) ) * 2
        ExamD_C_text = ""
        if(ExamD_C > 100){
            ExamD_C_text = "성취도 C를 맞을 수 없습니다."
        }
        if(ExamD_C < 100){
            ExamD_C_text = "적어도 " + String(Math.round(ExamD_C)) + "점을 맞으면 성취도 C입니다."
        }
        if(ExamD_C < 0){
            ExamD_C_text = "성취도 C는 나오지 않습니다."
        }

        ExamD_D = ( 60 - (numda+numdb) ) * 2
        ExamD_D_text = ""
        if(ExamD_D > 100){
            ExamD_D_text = "성취도 D를 맞을 수 없습니다."
        }
        if(ExamD_D < 100){
            ExamD_D_text = "적어도 " + String(Math.round(ExamD_D)) + "점을 맞으면 성취도 D입니다."
        }
        if(ExamD_D < 0){
            ExamD_D_text = "성취도 D는 나오지 않습니다."
        }

        ExamD_E = ( 50 - (numda+numdb) ) * 2
        ExamD_E_text = ""
        if(ExamD_E > 100){
            ExamD_E_text = "성취도 E를 맞을 수 없습니다."
        }
        if(ExamD_E < 100 ){
            ExamD_E_text = "적어도 " + String(Math.round(ExamD_E)) + "점을 맞으면 성취도 E입니다."
        }
        if(ExamD_E < 0){
            ExamD_E_text = "성취도 E는 나오지 않습니다."
        }

        alert(ExamD_B_text + ExamD_C_text + ExamD_D_text + ExamD_E_text)
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

        ExamE_B = ( 80 - (numea+numeb) ) * 2
        ExamE_B_text = ""
        if(ExamE_B > 100){
            ExamE_B_text = "성취도 B를 맞을 수 없습니다."
        }
        if(ExamE_B < 100){
            ExamE_B_text = "적어도 " + String(Math.round(ExamE_B)) + "점을 맞으면 성취도 B입니다."
        }
        if(ExamE_B < 0){
            ExamE_B_text = "성취도 B는 나오지 않습니다."
        }

        ExamE_C = ( 70 - (numea+numeb) ) * 2
        ExamE_C_text = ""
        if(ExamE_C > 100){
            ExamE_C_text = "성취도 C를 맞을 수 없습니다."
        }
        if(ExamE_C < 100){
            ExamE_C_text = "적어도 " + String(Math.round(ExamE_C)) + "점을 맞으면 성취도 C입니다."
        }
        if(ExamE_C < 0){
            ExamE_C_text = "성취도 C는 나오지 않습니다."
        }

        ExamE_D = ( 60 - (numea+numeb) ) * 2
        ExamE_D_text = ""
        if(ExamE_D > 100){
            ExamE_D_text = "성취도 D를 맞을 수 없습니다."
        }
        if(ExamE_D < 100){
            ExamE_D_text = "적어도 " + String(Math.round(ExamE_D)) + "점을 맞으면 성취도 D입니다."
        }
        if(ExamE_D < 0){
            ExamE_D_text = "성취도 D는 나오지 않습니다."
        }

        ExamE_E = ( 50 - (numea+numeb) ) * 2
        ExamE_E_text = ""
        if(ExamE_E > 100){
            ExamE_E_text = "성취도 E를 맞을 수 없습니다."
        }
        if(ExamE_E < 100 ){
            ExamE_E_text = "적어도 " + String(Math.round(ExamE_E)) + "점을 맞으면 성취도 E입니다."
        }
        if(ExamE_E < 0){
            ExamE_E_text = "성취도 E는 나오지 않습니다."
        }

        alert(ExamE_B_text + ExamE_C_text + ExamE_D_text + ExamE_E_text)
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

        ExamF_B = ( 80 - (numfa+numfb) ) * 2
        ExamF_B_text = ""
        if(ExamF_B > 100){
            ExamF_B_text = "성취도 B를 맞을 수 없습니다."
        }
        if(ExamF_B < 100){
            ExamF_B_text = "적어도 " + String(Math.round(ExamF_B)) + "점을 맞으면 성취도 B입니다."
        }
        if(ExamF_B < 0){
            ExamF_B_text = "성취도 B는 나오지 않습니다."
        }

        ExamF_C = ( 70 - (numfa+numfb) ) * 2
        ExamF_C_text = ""
        if(ExamF_C > 100){
            ExamF_C_text = "성취도 C를 맞을 수 없습니다."
        }
        if(ExamF_C < 100){
            ExamF_C_text = "적어도 " + String(Math.round(ExamF_C)) + "점을 맞으면 성취도 C입니다."
        }
        if(ExamF_C < 0){
            ExamF_C_text = "성취도 C는 나오지 않습니다."
        }

        ExamF_D = ( 60 - (numfa+numfb) ) * 2
        ExamF_D_text = ""
        if(ExamF_D > 100){
            ExamF_D_text = "성취도 D를 맞을 수 없습니다."
        }
        if(ExamF_D < 100){
            ExamF_D_text = "적어도 " + String(Math.round(ExamF_D)) + "점을 맞으면 성취도 D입니다."
        }
        if(ExamF_D < 0){
            ExamF_D_text = "성취도 D는 나오지 않습니다."
        }

        ExamF_E = ( 50 - (numfa+numfb) ) * 2
        ExamF_E_text = ""
        if(ExamF_E > 100){
            ExamF_E_text = "성취도 F를 맞을 수 없습니다."
        }
        if(ExamF_E < 100 ){
            ExamF_E_text = "적어도 " + String(Math.round(ExamF_E)) + "점을 맞으면 성취도 E입니다."
        }
        if(ExamF_E < 0){
            ExamF_E_text = "성취도 F는 나오지 않습니다."
        }

        alert(ExamF_B_text + ExamF_C_text + ExamF_D_text + ExamF_E_text)
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
            document.getElementById('subject-g-result').innerHTML = "수행평가 점수가 위와 같을 때, 기말 점수가 적어도 " + String(ExamG) + "점 이상이여야 성취도 A 입니다."
        }
        if(ExamG > 100){
            document.getElementById('subject-g-result').innerHTML = "성취도 A를 받을 수 없습니다."
        }
    }
    if(what=="other-result"){

        ExamG_B = ( 80 - (numga+numgb) ) * 2
        ExamG_B_text = ""
        if(ExamG_B > 100){
            ExamG_B_text = "성취도 B를 맞을 수 없습니다."
        }
        if(ExamG_B < 100){
            ExamG_B_text = "적어도 " + String(Math.round(ExamG_B)) + "점을 맞으면 성취도 B입니다."
        }
        if(ExamG_B < 0){
            ExamG_B_text = "성취도 B는 나오지 않습니다."
        }

        ExamG_C = ( 70 - (numga+numgb) ) * 2
        ExamG_C_text = ""
        if(ExamG_C > 100){
            ExamG_C_text = "성취도 C를 맞을 수 없습니다."
        }
        if(ExamG_C < 100){
            ExamG_C_text = "적어도 " + String(Math.round(ExamG_C)) + "점을 맞으면 성취도 C입니다."
        }
        if(ExamG_C < 0){
            ExamG_C_text = "성취도 C는 나오지 않습니다."
        }

        ExamG_D = ( 60 - (numga+numgb) ) * 2
        ExamG_D_text = ""
        if(ExamG_D > 100){
            ExamG_D_text = "성취도 D를 맞을 수 없습니다."
        }
        if(ExamG_D < 100){
            ExamG_D_text = "적어도 " + String(Math.round(ExamG_D)) + "점을 맞으면 성취도 D입니다."
        }
        if(ExamG_D < 0){
            ExamG_D_text = "성취도 D는 나오지 않습니다."
        }

        ExamG_E = ( 50 - (numga+numgb) ) * 2
        ExamG_E_text = ""
        if(ExamG_E > 100){
            ExamG_E_text = "성취도 F를 맞을 수 없습니다."
        }
        if(ExamG_E < 100 ){
            ExamG_E_text = "적어도 " + String(Math.round(ExamG_E)) + "점을 맞으면 성취도 E입니다."
        }
        if(ExamG_E < 0){
            ExamG_E_text = "성취도 F는 나오지 않습니다."
        }

        alert(ExamG_B_text + ExamG_C_text + ExamG_D_text + ExamG_E_text)
    }

}
