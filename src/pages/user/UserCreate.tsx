import type { DatePickerProps, FormProps } from "antd";
import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import { TUser } from "../../types";
import { toast } from "sonner";
import dayjs from "dayjs";

const UserCreate = ({
  setIsNewUser,
  isNewUser,
  editingUser,
  isModalVisible,
  setIsModalVisible,
  setIsModalOpen,
  isModalOpen,
}) => {
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish: FormProps<TUser>["onFinish"] = (values) => {
    console.log("Success:", values);

    // Use the existing ID if editing an existing user
    const userId = editingUser?.id || Date.now().toString(); // Generate a new ID if creating a new user

    const userData = {
      id: userId,
      dateOfBirth: values.dateOfBirth ? values.dateOfBirth.format() : null, // Use Day.js directly
      ...values,
    };

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if we are updating an existing user
    const userIndex = existingUsers.findIndex((user) => user.id === userId);
    if (userIndex !== -1) {
      // Update existing user
      existingUsers[userIndex] = userData;
      toast.success("Successfully updated user");
    } else {
      // Create new user
      existingUsers.push(userData);
      toast.success("Successfully created user");
    }

    localStorage.setItem("users", JSON.stringify(existingUsers));
    console.log("User data stored:", userData);
    setIsNewUser(!isNewUser);
    handleCancel(); // Close the modal after successful submission
  };

  const onFinishFailed: FormProps<TUser>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
    toast.error("Please fill all input.");
  };

  const validateDateOfBirth = (_: any, value: any) => {
    if (!value) {
      return Promise.reject(new Error("Please select your date of birth!"));
    }

    const date4 = dayjs(value); // Ensure we're using Day.js

    if (!date4.isValid()) {
      return Promise.reject(new Error("Invalid date selected!"));
    }

    const today = dayjs();
    const hundredYearsAgo = today.subtract(100, "year");

    if (date4.isAfter(today)) {
      return Promise.reject(
        new Error("Date of birth cannot be in the future!")
      );
    }

    if (date4.isBefore(hundredYearsAgo)) {
      return Promise.reject(
        new Error("Date of birth cannot be more than 100 years ago!")
      );
    }

    return Promise.resolve();
  };

  return (
    <div>
      <div className='flex justify-end mb-2'>
        <Button color='default' variant='solid' onClick={showModal}>
          Create User
        </Button>
      </div>

      <div>
        <Modal
          title='Create User'
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null} // Disable the default footer
        >
          <Form
            name='basic'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 24 }}
            style={{ maxWidth: 600 }}
            initialValues={{
              remember: true,
              // Convert to Day.js object
              ...editingUser,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
            layout='vertical'
          >
            <Form.Item<TUser>
              label='First Name'
              name='firstName'
              rules={[
                { required: true, message: "Please input your first name!" },
                {
                  min: 2,
                  message: "First name must be at least 2 characters!",
                },
                {
                  max: 50,
                  message: "First name cannot be longer than 50 characters!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<TUser>
              label='Last Name'
              name='lastName'
              rules={[
                { required: true, message: "Please input your last name!" },
                { min: 2, message: "Last name must be at least 2 characters!" },
                {
                  max: 50,
                  message: "Last name cannot be longer than 50 characters!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<TUser>
              label='Gender'
              name='gender'
              rules={[
                { required: true, message: "Please select your gender!" },
              ]}
            >
              <Select
                defaultValue='Select Gender'
                style={{ maxWidth: 600 }}
                options={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                ]}
              />
            </Form.Item>

            <Form.Item<TUser>
              label='Date of Birth'
              name='dateOfBirth'
              rules={[{ validator: validateDateOfBirth }]}
            >
              <DatePicker
                style={{ width: "100%" }}
                format='YYYY-MM-DD' // Optional: specify a date format
              />
            </Form.Item>

            <Form.Item<TUser>
              label='Phone number'
              name='phone'
              rules={[
                { required: true, message: "Please input your phone number!" },
                {
                  pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s0-9]*$/,
                  message: "Please enter a valid phone number!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<TUser>
              label='City'
              name='city'
              rules={[
                { min: 2, message: "City must be at least 2 characters!" },
                {
                  max: 50,
                  message: "City cannot be longer than 50 characters!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<TUser>
              label='Email'
              name='email'
              rules={[
                { required: true, message: "Please input your email!" },
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default UserCreate;
