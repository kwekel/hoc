import { includeUpdatableUser } from './include-updatable-user';

export const UserInfoForm = includeUpdatableUser(
  ({ user, onChangeUser, onPostUser, onResetUser }) => {
    const { name, age } = user || {};

    return user ? (
      <>
        <label>
          Name:
          <input
            name={name}
            onChange={(e) => {
              onChangeUser({ name: e.target.value });
            }}
          />
        </label>
        <label>
          Age:
          <input
            name={age}
            type="number"
            onChange={(e) => {
              onChangeUser({ age: Number(e.target.value) });
            }}
          />
        </label>
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onPostUser}>Save</button>
      </>
    ) : (
      <h3>Loading...</h3>
    );
  },
  '3'
);
