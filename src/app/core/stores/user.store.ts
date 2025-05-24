import { inject } from "@angular/core";
import { signalStore, withState, withMethods, patchState } from "@ngrx/signals";

import { UserService } from "../services/user-service";
import { User } from "../models/user";

interface UserState {
  user: User | undefined;
  activatedEstablishmentId: string;
  hasError: boolean;
  isLoading: boolean;
}

const initialState: UserState = {
  user: undefined,
  activatedEstablishmentId: "",
  hasError: false,
  isLoading: true,
};

export const UserStore = signalStore(
  withState<UserState>(initialState),
  withMethods((store) => {
    const userService = inject(UserService);
    return {
      get: (userId: string): void => {
        userService.get(userId).subscribe({
          next: (user) => {
            patchState(store, () => ({
              user,
              activatedEstablishmentId: user.establishmentIds.at(0),
              isLoading: false,
            }));
          },
          error: (error) => {
            console.error("Failed to fetch user", error);
            patchState(store, () => ({ hasError: true, isLoading: false }));
          },
        });
      },
    };
  })
);
