# DawonFinalExam
# Ver Beta 2.1

이 파일은 다원중학교 범위 내에서만 공유 가능합니다. 수행평가 정보에 관한 내용은 공유가 불가능하며, 성적 계산에 관한 코드만 참고가 가능합니다.
이 사이트는 학년,학기마다 달라지게 되며 방학때에는 타이머 기능만을 제공합니다.(순수 공부 시간 측정 가능)
성적 계산 외에도 사용자의 학업 관리를 위한 기능을 추가할 계획입니다.

추후 사이트 계획은 다음과 같습니다.
- 만약 이 사이트가 많은 사용자에게 도움을 주었는가?(유명)
  > 사이트 후계 관리자 모집 후 관리 지속

- 만약 이 사이트가 적은 사용자(지인)에게 도움을 주었는가?(무명)
  > 사이트 운영 종료

성적 계산 방식

다원중학교 성적 계산 방식은 두개로 나뉩니다.
  1) 수행 두개(25점, 25점) + 지필 50%
  2) 중간고사 n% + 수행 n개 + 기말고사 n%

이에 따른 계산 방식이 달라지게 됩니다.

1. 수행 두개(25점, 25점) + 지필 50% 일때
  두 개의 수행평가 점수를 input으로 받고 변수로 저장합니다.
  90점 부터 성취도 A 이므로, 두 수행평가 점수를 각각 x,y / 이번 기말고사 때 받아야할 점수를 S 라고 하면
  S = ( 90 - ( x+y ) ) * 2
  ex) 수행 점수가 각각 23점, 24점이 나왔다면
  S = ( 90 - 23+24 ) ) * 2
  S = 43 *2
  S = 86점
  따라서 이번 기말고사때 적어도 86점이 나와야 성취도 A를 받게 됩니다.

2. 중간고사 n% + 수행 n개 + 기말고사 n%
  2022년 2학년 2학기 영어 기준으로 설명합니다.
  영어는 중간고사 35% 기말고사 35% 수행 4개 30점(10점, 5점, 5점, 10점), 총 100점으로 계산합니다.
  지필고사 점수를 N%로 변환하는 법은 다음과 같습니다. (단 지금 영어 기준으로 N은 35임)
  받은 중간고사 점수를 x, N%로 변환하는 점수를 y라고 하면
  100:35=x:y 이므로 35x=100y입니다. 이를 토대로 알고리즘을 세워봅시다.

  기말고사때 적어도 받아야할 점수(성취도 A)를 S, 수행 4개를 각각 A,B,C,D , 중간고사때 받은 점수를 M 이라고 하면
  S = (( 90 - ((35*M/100)+A+B+C+D) ) * 100 ) / 35 로 계산할 수 있게 됩니다 !
  
  
3. 다른 결과 보기 버튼은 어떻게 구현하는가?
  1) 수행 두개(25점, 25점) + 지필 50% 일때
    간단하게 S = ( 90 - ( x+y ) ) * 2 였던 코드에서 90을 바꿔주면 됩니다.
    B는 총 80점 이상, C는 70점 이상, D는 60점 이상, E는 50점 이상이므로 각각
    S = ( 80 - ( x+y ) ) * 2
    S = ( 70 - ( x+y ) ) * 2
    S = ( 60 - ( x+y ) ) * 2
    S = ( 50 - ( x+y ) ) * 2 로 바꿔줍니다.

     단 여기서 위 식으로 계산되었을 때, S가 100을 넘으면 그 성취도를 못받는 뜻이니, "성취도 N을 받을 수 없습니다"로 리턴합니다.
    
  2) 중간고사 n% + 수행 n개 + 기말고사 n%

  기말고사때 적어도 받아야할 점수(성취도 A)를 S, 수행 4개를 각각 A,B,C,D , 중간고사때 받은 점수를 M 이라고 하면
  S = (( 90 - ((35*M/100)+A+B+C+D) ) * 100 ) / 35 에서
  90을 각각 바꿔주면 됩니다.
  S = (( 80 - ((35*M/100)+A+B+C+D) ) * 100 ) / 35
  S = (( 70 - ((35*M/100)+A+B+C+D) ) * 100 ) / 35
  S = (( 60 - ((35*M/100)+A+B+C+D) ) * 100 ) / 35
  S = (( 50 - ((35*M/100)+A+B+C+D) ) * 100 ) / 35
  
  단 여기서 
  S = (( 50 - ((35*M/100)+A+B+C+D) ) * 100 ) / 35 에서
  
  
  
  
  단 여기서 위 식으로 계산되었을 때, S가 100을 넘으면 그 성취도를 못받는 뜻이니, "성취도 N을 받을 수 없습니다"로 리턴합니다.
  또한 S가 0 이하면 성취도 N은 나오지 않는다는 뜻이니(수행평가 점수를 잘 받아 이 정도 성취도는 나오지 않는다 ..) "성취도 N은 나오지 않습니다."로 리턴합니다.
    

Copyright 2022. 민우준 all rights reserved
