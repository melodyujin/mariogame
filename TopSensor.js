class TopSensor extends Sensor{
    /*부모인 Sensor에게 물려받은 재산 중,
    tick()은 현재 left센서에 적용할 수 없다..
    따라서 tick()은 각 센서별로 코드를 작성하자*/

    //마리오.x+5,마리오.y-3
    tick(){
        this.x=mario.x+5;
        this.y=mario.y-3;
    }
}