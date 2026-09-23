function UserDto (user) {
    this.username = user.username ?? null;
    this.email = user.email ?? null;
    this.fullname = user.fullname ?? null;
    this.birthdate = user.birthdate ?? null;
    this.createdAt = user.createdAt ?? new Date();
    this.updatedAt = user.updatedAt ?? new Date();
}
export default UserDto;