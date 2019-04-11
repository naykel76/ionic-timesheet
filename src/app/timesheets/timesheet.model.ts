export interface Timesheet {
  id: string;
  weekEnding: string;
  totalHours: string;
  isPaid: boolean;
  hoursWorked: any[];
}