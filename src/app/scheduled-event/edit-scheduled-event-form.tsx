"use client";

import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object as zodObject, ZodTypeAny, string as zodString } from "zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { FormInputField } from "../common/form-input-field";
import { ScheduledEvent } from "../../lib/features/scheduled-event/scheduled-event";
import {
  removeScheduledEvent,
  updateScheduledEventField,
} from "../../lib/features/event-schedule/event-schedule-slice";
import { FormSelectField } from "../common/form-select-field";
import { ScheduledEventType } from "../../lib/features/scheduled-event/scheduled-event-type";
import { ScheduledEventInterval } from "../../lib/features/scheduled-event/scheduled-event-interval";
import { ScheduledEventDay } from "../../lib/features/scheduled-event/scheduled-event-day";

export type EditScheduledEventFormProps = {
  index: number;
  scheduledEvent: ScheduledEvent;
};

const scheduledEventSchema: ZodTypeAny = zodObject({
  clientId: zodString(),
  eventId: zodString(),
  eventScheduleId: zodString(),
  locationId: zodString().nullable(),
  organizerId: zodString().nullable(),
  name: zodString().min(1, { message: "Required" }),
  description: zodString(),
  scheduledEventType: zodString(),
  startTime: zodString(),
  endTime: zodString(),
  scheduledEventInterval: zodString().nullable(),
  scheduledEventDay: zodString().nullable(),
  scheduledEventDate: zodString().nullable(),
  cost: zodString().nullable(),
  category: zodString().nullable(),
  createdOn: zodString(),
  lastUpdatedOn: zodString(),
});

const EditScheduledEventForm: React.FC<EditScheduledEventFormProps> = ({
  index,
  scheduledEvent,
}) => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
  } = useForm<ScheduledEvent>({
    resolver: zodResolver(scheduledEventSchema),
    values: scheduledEvent,
  });

  const handleUpdate = async (index: number, field: string, value: any) => {
    dispatch(updateScheduledEventField({ index, field, value }));
  };

  const handleRemove = async (index: number) => {
    dispatch(removeScheduledEvent(index));
  };

  return (
    <form>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => handleRemove(index)}
          className="btn btn-delete mt-1"
        >
          <FontAwesomeIcon className="p-1" icon={faTrash} />
        </button>
        <FormInputField
          error={errors.name}
          name="name"
          placeholder="Scheduled Event Name"
          register={register}
          onBlur={(e: any) => handleUpdate(index, "name", e.target.value)}
        />

        <FormSelectField
          name="scheduledEventType"
          placeholder="Select Scheduled Event Type"
          error={errors.scheduledEventType}
          register={register}
          onChange={(e: any) =>
            handleUpdate(index, "scheduledEventType", e.target.value)
          }
          selectOptions={Object.values(ScheduledEventType).map(
            (scheduledEventType) => ({
              id: scheduledEventType.valueOf().toString(),
              displayValue: scheduledEventType.toString(),
            })
          )}
        />
        <FormSelectField
          name="scheduledEventInterval"
          placeholder="Select Scheduled Event Interval"
          error={errors.scheduledEventInterval}
          register={register}
          onChange={(e: any) =>
            handleUpdate(index, "scheduledEventInterval", e.target.value)
          }
          selectOptions={Object.values(ScheduledEventInterval).map(
            (scheduledEventInterval) => ({
              id: scheduledEventInterval.valueOf().toString(),
              displayValue: scheduledEventInterval.toString(),
            })
          )}
        />
        <FormSelectField
          name="scheduledEventDay"
          placeholder="Select Scheduled Event Day"
          error={errors.scheduledEventDay}
          register={register}
          onChange={(e: any) =>
            handleUpdate(index, "scheduledEventDay", e.target.value)
          }
          selectOptions={Object.values(ScheduledEventDay).map(
            (scheduledEventDay) => ({
              id: scheduledEventDay.valueOf().toString(),
              displayValue: scheduledEventDay.toString(),
            })
          )}
        />

        <FormInputField
          placeholder="Start Time"
          name="startTime"
          register={register}
          error={errors.startTime}
          onBlur={(e: any) => handleUpdate(index, "startTime", e.target.value)}
        />
        <FormInputField
          placeholder="End Time"
          name="endTime"
          register={register}
          error={errors.endTime}
          onBlur={(e: any) => handleUpdate(index, "endTime", e.target.value)}
        />
        <FormInputField
          placeholder="Scheduled Event Date"
          name="scheduledEventDate"
          register={register}
          error={errors.scheduledEventDate}
          onBlur={(e: any) =>
            handleUpdate(index, "scheduledEventDate", e.target.value)
          }
        />
        <FormInputField
          placeholder="Cost"
          name="cost"
          register={register}
          error={errors.cost}
          onBlur={(e: any) => handleUpdate(index, "cost", e.target.value)}
        />
        <FormInputField
          placeholder="Category"
          name="category"
          register={register}
          error={errors.category}
          onBlur={(e: any) => handleUpdate(index, "category", e.target.value)}
        />
        <FormInputField
          placeholder="Scheduled Event Description"
          name="description"
          register={register}
          error={errors.description}
          onBlur={(e: any) =>
            handleUpdate(index, "description", e.target.value)
          }
        />
      </div>
    </form>
  );
};

export { EditScheduledEventForm };
