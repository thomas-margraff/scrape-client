
  export class CalendarData {
      public eventid: number;
      public releaseDateTime: Date;
      public releaseDate: string;
      public releaseTime: string;
      public currency: string;
      public impact: string;
      public indicator: string;
      public actual: string;
      public forecast: string;
      public previous: string;
  }

  export interface CalendarModel {
      period: string;
      calendarData: Array<CalendarData>;
  }



