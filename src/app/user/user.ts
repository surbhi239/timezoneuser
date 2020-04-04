import { activityPeriods } from './activity-periods';

export interface user{
    id: String;
    real_name: String;
    tz: String;
    activity_periods: activityPeriods[];
}