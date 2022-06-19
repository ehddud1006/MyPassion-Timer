# MyPassion-Timer

저의 첫 프로젝트 입니다.
https://passion-timer.herokuapp.com/

## Summary

공부시간 측정 웹 사이트 
  - 기존 공부시간 사이트의 불편한 점  
 
    - 내가 의식하여 공부시간을 측정하고, 종료하여야 했다. 
    
    - 까먹고 시간을 측정안하거나, 쉴 때 정지를 안 한적이 있다 
    
  - 프로젝트 목표
  
    웹 캠으로 정면에 사람을 감지하여 시간을 측정한다. 사람이 앞에 없다면 시간을 측정하지 않는다.

## Feature

1. **로그인 & 로그아웃**
   
   ![ezgif com-gif-maker](https://user-images.githubusercontent.com/62373865/174467367-2b27048b-77e8-44d9-8e7d-5280f257e27d.gif)
   

2. **시간측정 & 기록저장**

- 공부 시간 측정 
  
  Google Teachable Machine 을 사용하여 현재 사용자의 상태를 웹캠으로 감지한다. 앞에 사람이 있다면 시간을 측정, 없다면 측정 하지 않는다.

- 기록 저장

  기록 저장 버튼을 누르면 측정한 공부시간이 서버에 저장된다.
  
     ![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/62373865/174467368-08d6631b-92f7-476c-a1f4-9d86fb82212b.gif)
  
3. **공부 랭킹**

   이용자의 시간을 등수를 매겨 알려줍니다.

   1등을 기준으로 그래프가 그려져 내가 얼마나 공부했는지 시각화 합니다.
   
   <img width="1083" alt="스크린샷 2022-06-19 오후 2 14 07" src="https://user-images.githubusercontent.com/62373865/174467385-42b6ffdb-c0dd-4f58-945c-cfa1eda5e39f.png">

4. **주간/월간/누적 랭킹**

    <img width="1161" alt="스크린샷 2022-06-19 오후 2 16 51" src="https://user-images.githubusercontent.com/62373865/174467395-67a75827-6667-4b56-855d-4cc2515d0d0f.png">
