package com.backstage.base.models;

//@Alias(value = "w2H")
public class W2H {
        private int OCWHID;
    private String WHY;
    private String WHER;
    private String WHAT;
    private String WHE;
    private String WHO;
    private String HOW;
    private String HOWMU;

    public W2H() {
        this.OCWHID = OCWHID;
        this.WHY = WHY;
        this.WHER = WHER;
        this.WHAT = WHAT;
        this.WHE = WHE;
        this.WHO = WHO;
        this.HOW = HOW;
        this.HOWMU = HOWMU;
    }

    public int getOCWHID() {
        return OCWHID;
    }

    public void setOCWHID(int OCWHID) {
        this.OCWHID = OCWHID;
    }

    public String getWHY() {
        return WHY;
    }

    public void setWHY(String WHY) {
        this.WHY = WHY;
    }

    public String getWHER() {
        return WHER;
    }

    public void setWHER(String WHER) {
        this.WHER = WHER;
    }

    public String getWHAT() {
        return WHAT;
    }

    public void setWHAT(String WHAT) {
        this.WHAT = WHAT;
    }

    public String getWHE() {
        return WHE;
    }

    public void setWHE(String WHE) {
        this.WHE = WHE;
    }

    public String getWHO() {
        return WHO;
    }

    public void setWHO(String WHO) {
        this.WHO = WHO;
    }

    public String getHOW() {
        return HOW;
    }

    public void setHOW(String HOW) {
        this.HOW = HOW;
    }

    public String getHOWMU() {
        return HOWMU;
    }

    public void setHOWMU(String HOWMU) {
        this.HOWMU = HOWMU;
    }

    @Override
    public String toString() {
        return "W2H{" +
                "OCWHID=" + OCWHID +
                ", WHY='" + WHY + '\'' +
                ", WHER='" + WHER + '\'' +
                ", WHAT='" + WHAT + '\'' +
                ", WHE='" + WHE + '\'' +
                ", WHO='" + WHO + '\'' +
                ", HOW='" + HOW + '\'' +
                ", HOWMU='" + HOWMU + '\'' +
                '}';
    }
}
    //    private int OCWHID;
//    private String why;
//    private String wher;
//    private String what;
//    private String whe;
//    private String who;
//    private String how;
//    private String howmu;


