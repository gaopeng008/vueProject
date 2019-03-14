import user from './user';
import menu from './menu';
import files from './files';

/**
 * 模拟数据mock
 * 
 * mock是否开启模拟数据拦截
 */

user({ mock: true });

menu({ mock: true });

files({ mock: true });