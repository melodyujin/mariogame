class BottomSensor extends Sensor{
    /*부모인 Sensor에게 물려받은 재산 중,
    tick()은 현재 left센서에 적용할 수 없다..
    따라서 tick()은 각 센서별로 코드를 작성하자*/

    //마리오.x+5,this.y+마리오.height
    tick(){
        this.x=mario.x+5;
        this.y=mario.y+mario.height;
    }
}