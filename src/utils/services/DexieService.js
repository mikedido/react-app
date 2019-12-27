import Dexie from 'dexie';

export default class DexieService extends Dexie {
    constructor() {
        super('trombi-carma');
        this.version(1).stores({ trombiDatas: '++id' });
    }
    listCircles = () => this.trombiDatas.toArray();
    put = (trombiDatas) => this.trombiDatas.put(trombiDatas);
    delete = (id) => this.trombiDatas.delete(id);
    clear = () => this.trombiDatas.clear();
    count = () => this.trombiDatas.count();
    getLastInput = () => this.trombiDatas.orderBy('id').last();
}