package com.backstage.base.service;


public interface IRedisService {
    boolean setString(String key, String value);

    String getString(String key);

    boolean expire(String key, long expire);
}