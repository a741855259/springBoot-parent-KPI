package com.backstage.base.models;

import com.alibaba.fastjson.annotation.JSONField;
import lombok.Data;
import org.apache.commons.lang.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
@Data
public class PageDo {
	
	private static int index = 0;
	private static int size = 10;

	private final static int PAGESIZE = 10; //默认显示的记录数

	//slect * from student limit 4 offset 9    注意：4表示返回4行，9表示从表的第十行开始
	private int limit;
	private int offset ;

	private int total = 0;
	private List rows; //显示的记录

	public static String DESC = "desc";
	public static String ASC = "asc";
	/*可用排序类型*/
	public static List<String> SORT = new ArrayList<String>(){
		private static final long serialVersionUID = 1L;{
			this.add("desc");
			this.add("asc");
		}
	};
	public PageDo(){

	}
	public PageDo(int limit, int offset){
		//计算当前页
		if (limit < 0) {
			this.limit = 1;
		} else {
			//当前页
			this.limit = limit;
		}
		//记录每页显示的记录数
		if (offset < 0) {
			this.offset = PAGESIZE;
		} else {
			this.offset = offset;
		}
	}
	
	public static int getIndex(int pageIndex){
		pageIndex--;
		if (pageIndex < 0) {
			return index;
		}
		return pageIndex;
	}
	
	public static int getSize(int pageSize){
		if (pageSize < 5 || pageSize > 100) {
			return size;
		}
		return pageSize;
	}
	
	public static String getSort(String sort, Map<String,String> filds){
		if (StringUtils.isNotBlank(sort)) {
			String[] tmps = sort.split(" ");
			if (tmps.length == 2 && filds.containsKey(tmps[0])
					&& SORT.contains(tmps[1])) {
				return filds.get(tmps[0])+" "+tmps[1];
			}
		}
		return null;
	}
	
	public static String getFild(String fild, Map<String,String> filds){
		if (StringUtils.isNotBlank(fild) && filds.containsKey(fild)) {
			return filds.get(fild);
		}
		return null;
	}

	public static int getIndex() {
		return index;
	}

	public static void setIndex(int index) {
		PageDo.index = index;
	}

	public static int getSize() {
		return size;
	}

	public static void setSize(int size) {
		PageDo.size = size;
	}

	public static int getPAGESIZE() {
		return PAGESIZE;
	}

	public int getLimit() {
		return limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}

	public int getOffset() {
		return offset;
	}

	public void setOffset(int offset) {
		this.offset = offset;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public List getRows() {
		return rows;
	}

	public void setRows(List rows) {
		this.rows = rows;
	}

	public static String getDESC() {
		return DESC;
	}

	public static void setDESC(String DESC) {
		PageDo.DESC = DESC;
	}

	public static String getASC() {
		return ASC;
	}

	public static void setASC(String ASC) {
		PageDo.ASC = ASC;
	}

	public static List<String> getSORT() {
		return SORT;
	}

	public static void setSORT(List<String> SORT) {
		PageDo.SORT = SORT;
	}
}
