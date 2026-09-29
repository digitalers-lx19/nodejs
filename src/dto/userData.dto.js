function UserDataDto(user) {
    this.fullname = user.fullname ?? null;
    this.birthdate = user.birthdate ?? null;
    this.address = user.address ?? null;
    this.location = user.location ?? null;
}
export default UserDataDto;