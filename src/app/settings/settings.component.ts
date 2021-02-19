import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"],
})
export class SettingsComponent implements OnInit {
  formGroup: FormGroup;
  titleAlert: string = "This field is required";
  disableForm: boolean = false;
  editFormText: string = "Edit";
  userData: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem("userMeta"));
    this.createForm();
  }

  /**
   * Reactive Form - CREATE FORM
   */
  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.formGroup = this.formBuilder.group({
      email: [
        {
          value: this.userData.email,
          disabled: true,
        },
        [Validators.required, Validators.pattern(emailregex)],
      ],
      name: [
        { value: this.userData.name, disabled: true },
        Validators.required,
      ],
      password: [{ value: null, disabled: true }, [this.checkPassword]],
      language: [
        { value: this.userData.language, disabled: true },
        [Validators.required],
      ],
      validate: "",
    });
  }

  get name() {
    return this.formGroup.get("name") as FormControl;
  }

  /**
   * Check Password
   * @param control
   */
  checkPassword(control) {
    let enteredPassword = control.value;
    let passwordCheck = /^(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
    return !passwordCheck.test(enteredPassword) && enteredPassword
      ? { requirements: true }
      : null;
  }

  /**
   * This is used to get email errors
   */
  getErrorEmail() {
    return this.formGroup.get("email").hasError("required")
      ? "Field is required"
      : this.formGroup.get("email").hasError("pattern")
      ? "Not a valid emailaddress"
      : this.formGroup.get("email").hasError("alreadyInUse")
      ? "This emailaddress is already in use"
      : "";
  }

  /**
   * Check errors related to passwords
   */
  getErrorPassword() {
    return this.formGroup.get("password").hasError("required")
      ? "Field is required (at least six characters, one uppercase letter and one number)"
      : this.formGroup.get("password").hasError("requirements")
      ? "Password needs to be at least six characters, one uppercase letter and one number"
      : "";
  }

  /**
   * Enable/Disable Form
   */
  toggleDisable() {
    if (this.disableForm) {
      this.formGroup.disable();
      this.editFormText = "Edit";
    } else {
      this.formGroup.enable();
      this.editFormText = "Cancel";
    }
    this.disableForm = !this.disableForm;
  }

  /**
   * Submit User Form
   * @param userData
   */
  onSubmit(userData) {
    userData["_id"] = this.userData["_id"];
    if (!userData["password"]) {
      delete userData["password"];
    }
    delete userData["validate"];
    this.authService.updateUserProfile(userData).subscribe(
      (res: any) => {
        localStorage.removeItem("userMeta");
        localStorage.setItem("userMeta", JSON.stringify(userData));
        this.toggleDisable();
      },
      (err) => console.log(err)
    );
  }
}
