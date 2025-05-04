import {threads} from '../threads';
/**
 * エンティティのプロキシ拡張
 */
export class EntityProxyExt {
    /** スレッドＩＤ */
    static THREAD_ID = "threadId";
    /** スレッドカウンター */
    static THREAD_COUNTER = "threadCounter";
    /** 「他のスクリプトを削除する」メソッド名 */
    static STOP_OTHER_SCRIPTS = "$stopOtherScripts";
    /** 「このスクリプトを停止」スイッチの名前 */
    static STOP_THIS_SCRIPT_SWITCH = "$stopThisScriptSwitch";
    static SET_STOP_THIS_SCRIPT_SWITCH = "setStopThisScriptSwitch";
    static GET_STOP_THIS_SCRIPT_SWITCH = "getStopThisScriptSwitch";
    static THREAD_NAME = "threadName";
    /** プロキシテスター */
    static IS_PROXY_TEST = "isProxyTest"

    
    /** プロキシの定義 */
    static getProxy(obj, callback) {
        //proxyCounter+=1;
        //console.log(`getProxy, proxyCounter=${proxyCounter}`);
        const proxy = new Proxy(obj, {
            get(target, name, receiver) {
                // 実体がプロキシであるかをチェックする
                if(name == EntityProxyExt.IS_PROXY_TEST){
                    return (_=>true);
                }
                // スレッドＩＤを返す
                if (name == EntityProxyExt.THREAD_ID) {
                    // @ts-ignore (undefined error)
                    return this.threadId;
                }
                if(name == EntityProxyExt.THREAD_NAME) {
                    // @ts-ignore (undefined error)
                    return this.threadName;
                }
                // スレッドカウンターを返す
                if(name == EntityProxyExt.THREAD_COUNTER){
                    // @ts-ignore (undefined error)
                    return this.threadCounter;
                }
                if(name == EntityProxyExt.GET_STOP_THIS_SCRIPT_SWITCH){
                    const self = this;                    
                    return function(){
                        // @ts-ignore (undefined error)
                        return self.stop_this_script_switch;
                    }
                }
                if(name == EntityProxyExt.SET_STOP_THIS_SCRIPT_SWITCH){
                    const self = this;                    
                    return function(value){
                        // @ts-ignore (undefined error)
                        self.stop_this_script_switch = value;
                    }
                }
                //「このスクリプトを停止」スイッチオンのとき
                // @ts-ignore (undefined error)
                if(this.stop_this_script_switch === true){
                    if(name == 'Motion' || 
                        name == 'Looks' ||
                        name == 'Sound' ||
                        name == 'Event' ||
                        name == 'Control' ||
                        name == 'Sensing' ||
                        name == 'Image'
                    ){
                        // 「このスクリプトを停止」スイッチオンのときは
                        // 例外を発生させる。
                        throw threads.THROW_STOP_THIS_SCRIPTS;
                    }
                }
                if(name == threads.THROW_FORCE_STOP_THIS_SCRIPTS) {
                    return function() {
                        throw threads.THROW_FORCE_STOP_THIS_SCRIPTS;
                    }
                }
                // @ts-ignore (...argument error)
                return Reflect.get(...arguments);
            },
            set(target, name, value) {
                // スレッドＩＤのセッター
                if(name == EntityProxyExt.THREAD_ID){
                    // @ts-ignore (undefined error)
                    this.threadId = value;
                    return true;
                }
                // スレッドカウンターのセッター
                if(name == EntityProxyExt.THREAD_COUNTER){
                    // @ts-ignore (undefined error)
                    this.threadCounter = value;
                    return true;
                }
                // 「このスクリプトを停止」スイッチのセッター
                if(name == EntityProxyExt.STOP_THIS_SCRIPT_SWITCH){
                    // @ts-ignore (undefined error)
                    this.stop_this_script_switch = value;
                    return true;
                }
                if(name == EntityProxyExt.THREAD_NAME) {
                    // @ts-ignore (undefined error)
                    this.threadName = value;
                    return true;
                }
                // @ts-ignore (...argument error)
                return Reflect.set(...arguments);
            }
        });
        
        return proxy;
    }
}
