
export class IndicatorData {
    public id: number;
    public eventId: number;
    public releaseDateTime: Date;
    public releaseDate = '';
    public releaseTime = '';
    public currency = '';
    public indicator = '';
    public actual = '';
    public forecast = '';
    public previous;
    public createDate: Date;
    public modifyDate?: Date;
}
