package com.backstage.base.mapper;

import com.backstage.base.models.W2H;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface W2HMapper {

    //user表；写入的是什么数据；从外面拿的什么数据
    int addw2h(W2H w2h);
    //from 表明 where 限制条件： 数据库里的username = 内存里的数据——————返回的是User类的对象getuser，给这个getuser 的初始值是username
//    @Select("select * from user where username=#{username}")
//    //传过来的值 是前端或者说 传到服务器上的值
////    在接口中定义抽象方法
//    W2H getw2h(String WHY);



}
