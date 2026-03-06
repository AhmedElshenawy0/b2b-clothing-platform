"use client";

import { Form, Input, InputNumber, Select, DatePicker, Button } from "antd";

const { TextArea } = Input;

export const B2BInquiryForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Inquiry Data:", values);
  };

  return (
    <section className="py-12 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold text-gray-900">
            Request a Manufacturing Quote
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Tell us about your business and order requirements. Our B2B sales
            team will contact you within one business day.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white border border-gray-800 rounded-2xl p-8 shadow-sm">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="space-y-2"
          >
            {/* Company + Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <Form.Item
                label="Company Name"
                name="company"
                rules={[
                  { required: true, message: "Company name is required" },
                ]}
              >
                <Input placeholder="Your company or brand name" size="large" />
              </Form.Item>

              <Form.Item
                label="Business Email"
                name="email"
                rules={[
                  { required: true, message: "Email is required" },
                  { type: "email", message: "Enter a valid email" },
                ]}
              >
                <Input placeholder="name@company.com" size="large" />
              </Form.Item>
            </div>

            {/* Quantity + Market */}
            <div className="grid md:grid-cols-2 gap-6">
              <Form.Item
                label="Estimated Order Quantity"
                name="quantity"
                rules={[{ required: true, message: "Quantity is required" }]}
              >
                <InputNumber
                  size="large"
                  min={1}
                  placeholder="e.g. 500 pcs"
                  className="w-full"
                />
              </Form.Item>

              <Form.Item
                label="Target Market"
                name="market"
                rules={[{ required: true, message: "Select a target market" }]}
              >
                <Select size="large" placeholder="Select market">
                  <Select.Option value="local">Local Market</Select.Option>
                  <Select.Option value="me">Middle East</Select.Option>
                  <Select.Option value="eu">Europe</Select.Option>
                  <Select.Option value="us">USA / Canada</Select.Option>
                  <Select.Option value="africa">Africa</Select.Option>
                  <Select.Option value="other">Other</Select.Option>
                </Select>
              </Form.Item>
            </div>

            {/* Delivery Date */}
            <Form.Item
              label="Target Delivery Date"
              name="deliveryDate"
              rules={[{ required: true, message: "Delivery date is required" }]}
            >
              <DatePicker size="large" className="w-full" />
            </Form.Item>

            {/* Details */}
            <Form.Item
              label="Project Details"
              name="details"
              rules={[
                { required: true, message: "Please provide project details" },
              ]}
            >
              <TextArea
                rows={4}
                placeholder="Product type, fabric, branding, sizing, packaging, or any specific requirements"
              />
            </Form.Item>

            {/* Submit */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4 items-center">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="bg-green-700 hover:bg-green-600"
              >
                Submit Inquiry
              </Button>

              <p className="text-xs text-gray-500">
                By submitting, you agree to be contacted regarding your inquiry.
              </p>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};
