import React from 'react'

function AddCategory() {
    return (
        <>
            {/* <Modal title="Xoá Danh mục sản phẩm" open={isModalOpenDelete} onOk={handleOkDelete} onCancel={handleCancelDelete}>
        <p>Bạn có chắc chắn muốn xoá không?</p>
    </Modal> */}
            {/* 
    <Modal title={categoryUpdate ? "Cập nhật danh mục" : "Thêm mới danh mục"} maskClosable={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={<></>}>
        <Form
            name="basic"
            form={formRef}
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Danh mục"
                name="category_name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <div style={{ display: "flex", alignItems: "center", margin: "10px 0 20px 0" }}>
                    <div style={{ margin: "10px 0" }}>
                        <label className='bg-primary rounded p-2 text-white' htmlFor='image_file' >Choose File</label>
                        <input id='image_file' style={{ display: "none" }} type="file" accept=".jpg, .jpeg, .png, .gif" onChange={(e) => handleChoosePhoto(e)} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: 'center', flexGrow: 1 }}>
                        <Image width={200} src={linkImage} />
                    </div>
                </div>

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </Modal> */}
            {/* {showAdd && <AddCategory handleCloseAdd={handleCloseAdd} />}
    {showEdit && <EditCategory handleCloseEdit={handleCloseEdit} idEdit={idEdit} />} */}
            <div className='p-5 mb-3'>
                <div className="cart_container mb-4">
                    <h3 > <i className="bi bi-journal-text" /> QUẢN LÝ DANH MỤC </h3>
                </div>
                <div>
                    <form className='d-flex justify-content-between mb-4'>
                        <div className='d-flex  div-search justify-content-between'>
                            <input type="text" name="" id="" placeholder='Tìm kiếm theo tên danh mục'
                                className='p-1 input-search-product' />
                            <button className='py-1 rounded btn-search-product'><i className="fa-solid fa-magnifying-glass fs-4 "></i> </button>
                        </div>
                        <div className='d-flex gap-3 align-items-center'>
                            <div><button className='py-2 px-4 rounded btn-add-product' type="button"><i className="fa-solid fa-plus"></i> Thêm mới</button></div>
                            <div className="btn-group">
                                {/* <Select
                            defaultValue="asc"
                            style={{
                                width: 220, height: 40
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: "asc",
                                    label: "Sắp xếp theo ID tăng dần",
                                },
                                {
                                    value: "desc",
                                    label: "Sắp xếp theo ID giảm dần",
                                },
                            ]}
                        /> */}
                            </div>
                        </div>
                    </form>
                </div>
                <div className='product-content-table'>
                    <table className="table table-hover border table-content ">
                        <thead >
                            <tr >
                                <th scope="col" className='p-3'>STT</th>
                                <th scope="col" className='p-3'>ID</th>
                                <th scope="col" className='p-3'>Hình ảnh</th>
                                <th scope="col" className='p-3'>Danh mục</th>
                                <th colSpan={2} scope="col" className='p-3'>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {displayCategory.map((cat, index) => (
                                <tr key={cat.id}>
                                    <td className='p-3'> {index + 1}</td>
                                    <td className='p-3'> {cat.id}</td>
                                    < td className='p-3'><img src={cat.image} width={45} height={45} className='rounded-circle' alt="" /></td>
                                    <td className='p-3'> {cat.category_name}</td>
                                    <td className='p-3'><button className='btn rounded border-warning bg-warning text-white'><i className="fa-solid fa-pen-to-square fs-6 me-2"></i>Sửa</button> </td>
                                    < td className='p-3'><button className='btn rounded border-danger bg-danger text-white'><i className="fa-solid fa-trash  fs-6 me-2"></i> Xoá</button></td>
                                </tr>
                            ))} */}

                        </tbody>
                    </table>
                </div>

            </div>

        </>
    )
}

export default AddCategory
