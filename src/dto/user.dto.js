import UserDataDto from './userData.dto.js';
function UserDto (user) {
    this.username = user.username ?? null;
    this.email = user.email ?? null;
    this.userData = new UserDataDto(user.userData ?? {
        fullname: user.fullname,
        birthdate: user.birthdate,
        address: user.address,
        location: user.location
    });
    this.status = user.status ?? "active";
    this.createdAt = user.createdAt ?? new Date();
    this.updatedAt = user.updatedAt ?? new Date();
}
export default UserDto;