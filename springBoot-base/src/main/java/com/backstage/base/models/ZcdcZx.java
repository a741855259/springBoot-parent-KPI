package com.backstage.base.models;

import com.alibaba.fastjson.annotation.JSONField;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import java.util.Date;

/**
 * 专项管理
 */
@Data
public class ZcdcZx {
    private String zxUuid;

    private String zxCode;

    private String zxName;

    /*全国 ：1
    省/直辖市 ：2
    区/旗/市 ：3 */
    private String zxRange;

    private String zxStatus;

    private String zxType;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @JSONField(format="yyyy-MM-dd")
    private Date startTime;

    @JSONField(format="yyyy-MM-dd")
    @JsonFormat (pattern="yyyy-MM-dd")
    private Date endTime;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    @JsonFormat (pattern="yyyy-MM-dd HH:mm:ss")
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date updateTime;

    private String key1;

    private String key2;

    private String key3;

    public ZcdcZx() {
    }

    public ZcdcZx(String zxUuid, String zxCode, String zxName, String zxRange, String zxStatus, String zxType, Date startTime, Date endTime, Date createTime, Date updateTime, String key1, String key2, String key3) {
        this.zxUuid = zxUuid;
        this.zxCode = zxCode;
        this.zxName = zxName;
        this.zxRange = zxRange;
        this.zxStatus = zxStatus;
        this.zxType = zxType;
        this.startTime = startTime;
        this.endTime = endTime;
        this.createTime = createTime;
        this.updateTime = updateTime;
        this.key1 = key1;
        this.key2 = key2;
        this.key3 = key3;
    }

    public String getZxUuid() {
        return zxUuid;
    }

    public void setZxUuid(String zxUuid) {
        this.zxUuid = zxUuid;
    }

    public String getZxCode() {
        return zxCode;
    }

    public void setZxCode(String zxCode) {
        this.zxCode = zxCode;
    }

    public String getZxName() {
        return zxName;
    }

    public void setZxName(String zxName) {
        this.zxName = zxName;
    }

    public String getZxRange() {
        return zxRange;
    }

    public void setZxRange(String zxRange) {
        this.zxRange = zxRange;
    }

    public String getZxStatus() {
        return zxStatus;
    }

    public void setZxStatus(String zxStatus) {
        this.zxStatus = zxStatus;
    }

    public String getZxType() {
        return zxType;
    }

    public void setZxType(String zxType) {
        this.zxType = zxType;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public String getKey1() {
        return key1;
    }

    public void setKey1(String key1) {
        this.key1 = key1;
    }

    public String getKey2() {
        return key2;
    }

    public void setKey2(String key2) {
        this.key2 = key2;
    }

    public String getKey3() {
        return key3;
    }

    public void setKey3(String key3) {
        this.key3 = key3;
    }

    @Override
    public String toString() {
        return "ZcdcZx{" +
                "zxUuid='" + zxUuid + '\'' +
                ", zxCode='" + zxCode + '\'' +
                ", zxName='" + zxName + '\'' +
                ", zxRange='" + zxRange + '\'' +
                ", zxStatus='" + zxStatus + '\'' +
                ", zxType='" + zxType + '\'' +
                ", startTime=" + startTime +
                ", endTime=" + endTime +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                ", key1='" + key1 + '\'' +
                ", key2='" + key2 + '\'' +
                ", key3='" + key3 + '\'' +
                '}';
    }
}