import React from 'react';
import jsonp from '../jsonp/jsonp';
import {Button, Row, Col} from 'antd';
import {
    Tree,
    Modal,
    Table,
    Input,
    Icon,
    Popconfirm,
    Select,
    message,
    Form,
    Tabs,
    DatePicker,
    Radio,
    Checkbox,
    TreeSelect,
    Upload
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const TabPane = Tabs.TabPane;
const TreeNode = Tree.TreeNode;
const RadioGroup = Radio.Group;
// import Ueditor from './Ueditor'
const {TextArea} = Input;
import {connect} from 'react-redux';
import serverSrc from '../../public/config';
import createHistory from 'history/createHashHistory';
const history = createHistory();
import fetch from '../component/fetch';
import {accessFn} from "../actions/index.redux";
import moment from "moment/moment";

class Access extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formLayout: 'horizontal',
            loading: false,
            ModaltreeData: [],
            addTreeSelect: [],
            treeData: [],
            visible: false,
            tableData:[],
            dataSource: [],
            productClassifyData: [],
            localToken: localStorage.getItem('token'),
            loading: true,
            onSelectLength: 10,
            submitLoading: false,
            searchText:null,
            ModalTitle: '',
            treeEvent: '',
            editModal: false,
            //上传状态
            fileList: [],
            defaultFileList: [],
            doneImgUrl: '',
            uploading: false,
            previewVisible: false, //图片查看缩略图
            previewImage: '', //图片查看地址
            doneList: [],
            tableImagesVisible: false, //表格分类图片弹窗框
            imgVisible: false,
            selectdataSource: null,
            gallerydoneImgUrl: '',
            galleryimgVisible: false,
            resGalleryphont: '',
            filtersArr: null,
            _id:''
        };


    }

    componentWillMount() {
        // UE.delEditor('contentProduct');

    }


    componentWillReceiveProps() {

    }

    componentDidMount() {
        this.searchSite()
    }

    onDelete(key) {
        this.props.accessFn('delete', {_id: key}).then(data => {
            message.info(data.msg);
            this.searchSite()
        })
    }
    refund(data) {

    }

    // 添加按钮
    addCate() {
        this
            .props
            .form
            .resetFields();
        this.setState({
            submitLoading: false,
            visible: true,
            ModalTitle: '添加权限',
            fileList: []
        }, function () {

            // UE
            //   .getEditor('contentProduct')
            //   .ready(function () {
            //     UE
            //       .getEditor('contentProduct')
            //       .setContent('请输入内容。。。')
            //   })

        });
    }

    //树形删除机构


    searchSite(id) {
        this.setState({loading: true})
        var _thisState = this
        this.props.accessFn('query').then(data => {
            data.status != 'ok' ? message.info(data.msg) : null;
            this.setState({loading: false,tableData:this.props.state.userLogin.accesstableData})
        })
    }

    //自动上传方法，原ANT 上传组件跨域存在问题 添加机构
    nodeSubmit(e) {
        e.preventDefault();
        this
            .props
            .form
            .validateFields((err, values) => {
                var formData = this
                    .props
                    .form
                    .getFieldsValue();
                if (!err) {
                    this.setState({submitLoading: true});
                    if (this.state.ModalTitle == "编辑权限") {
                        console.log(values,this.state._id)
                        fetch('access', Object.assign({
                            type: 'edit',
                            _id: this.state._id
                        }, values)).then(data => {
                            message.info(data.msg);
                            this.setState({submitLoading: false, visible: false});
                            this.searchSite()
                        })
                    } else {
                        if(values != undefined &&values.image !== undefined){
                            values.image = values.image.file.response.name
                        }
                        fetch('access', Object.assign({type: 'add'}, values)).then(data => {
                            message.info(data.msg);
                            this.setState({submitLoading: false, visible: false});
                            this.searchSite()
                        })
                    }
                }
            })
    }

    renderTreeNodes(data) {
        return data.map((item) => {
            return (<TreeNode
                title={item.serverName + '-' + item.domainName}
                key={item.id}
                dataRef={item}/>)
        });
    }

    //读取机构列表到弹出框下拉框内 添加产品分类下拉框
    addTreeNodes(data) {
        if (data != null) {
            return data.map(item => {
                return (
                    <Option key={item.id} value={item.id}>{item.title}</Option>
                )
            })
        }
    }

    //弹出框下拉框数据
    selectClass(id) {

        // this.setState({loading: true})
        //
        // var formData = new FormData();
        // formData.append('siteId', id);
        // formData.append("token", this.state.localToken);
        // formData.append('type', 'article');
        // var opts = {
        //   method: "POST", //请求方法
        //   body: formData, //请求体
        //   credentials: 'include'
        // }

        // fetch(serverSrc.__proto__.serverSrc + "admin/cate/query", opts).then((response) => {
        //   //你可以在这个时候将Promise对象转换成json对象:response.json() 转换成json对象后return，给下一步的.then处理
        //   return response.json()
        // }).then((responseText) => {
        //   this.setState({loading: false})
        //   if (responseText.status == '200') {
        //
        //     this.setState({selectdataSource: responseText.data});
        //
        //   } else {
        //     // message.info(responseText.msg)
        //   }
        // }).catch((error) => {
        //   alert(error)
        // })
    }
    //编辑 分类
    editModal(ev) {
        // const fileList = [{
        //     uid: -1,
        //     name: ev.image,
        //     status: 'done',
        //     url: serverSrc.url + 'serverPublic/images/' + ev.image,
        //     thumbUrl: serverSrc.url + 'serverPublic/images/' + ev.image,
        // }];


        this.props.form.setFieldsValue({
            // categoryId: ev.categoryId, orgId:ev.orgId, description: ev.description,
            name: ev.name,
            urls: ev.urls,
        })
        //
        //
        this.setState({
            submitLoading: false,
            visible: true,
            _id:ev._id,
            ModalTitle: '编辑权限'
        }, function () {
            // UE
            //     .getEditor('contentProduct')
            //     .ready((ueditor) => {
            //         UE
            //             .getEditor('contentProduct')
            //
            //             .setContent(ev.content)
            //     });
        });
    }
    //树形 操作
    onSelect(ev, event, a, b) {
        this.setState({onSelectLength: ev})
        if (ev.length > 0) {
            this.searchSite(ev[0]);
            this.setState({treeEvent: event.selectedNodes[0].props.dataRef})
            var _this = this;
            setTimeout(function () {
                _this.selectClass(ev[0]);
            }, 500)
        }

    }

    handleCancel() {
        // UM.delEditor('contentProduct');
        this.setState({previewVisible: false, visible: false, tableImagesVisible: false})
        // document.getElementsByClassName('ant-upload-list')[0].innerHTML="";
    }

    showImages(e, iamgeSrc) {
        this.setState({previewImage: e.target.src, tableImagesVisible: true});
    }


    UpBtn() {
        this
            .refs
            .upElem
            .refs
            .input
            .click()
    }


    //搜索方法
    onInputChange(e) {
        this.setState({searchText: e.target.value});
        // console.log(thiis.state.searchText)
    }

    onSearch() {
        const {searchText} = this.state;
        const reg = new RegExp(searchText, 'gi');
        if (searchText == ''||/^\s*$/.test(this.state.searchText)||searchText===null) {
            this.searchSite()
        } else {
            this.setState({
                filterDropdownVisible: false,
                filtered: !!searchText,
                loading: true
            });
            this.props.ArticleFn('search', {search: this.state.searchText}).then(data => {
                this.setState({
                    loading: false
                })
            })
        }
    }

    handleTableChange(pagination, filters, sorter) {
        this.setState({loading: true});
        console.log(this.state.searchText,pagination.current)
        if (this.state.searchText === null
        ) {

            this.props.accessFn('query', {current: pagination.current}).then(res => {
                this.setState({loading: false,tableData:this.props.state.userLogin.tableData});
            })
        } else {
            this.props.accessFn('search', {current: pagination.current, search: this.state.searchText}).then(res => {
                this.setState({loading: false,tableData:this.props.state.userLogin.tableData});
            })
        }
    }

    render() {
        const {dataSource} = this.state;
        const formItemLayout = {
            labelCol: {
                span: 4
            },
            wrapperCol: {
                xs: {
                    span: 18
                },
                sm: {
                    span: 18
                }
            }
        };
        const ueditorformItemLayout = {
            labelCol: {
                span: 4
            },
            wrapperCol: {
                xs: {
                    span: 17
                },
                sm: {
                    span: 17
                }
            }
        };
        const columns = [
            {
                title: '权限名',
                dataIndex: 'name',
                className: 'column-center',
                width: 150,
                key: 'name'
            }, {
                title: 'urls',
                dataIndex: 'urls',
                className: 'column-center',
                width: 180,
                key: 'urls',
            },{
                title: '创建时间',
                dataIndex: 'updatedAt',
                width: 180,
                className: 'column-center',
                key: 'updatedAt',
                render: (text, record) => {
                    return (moment(text).format('YYYY-MM-DD'));
                }
            },{
                title: '',
                dataIndex: '',
                className: 'column-center',
                key: '',
            },{
                title: '操作',
                dataIndex: 'operation1',
                className: 'column-center',
                width:200,
                fixed:'right',
                key: 'operation1',
                render: (text, record) => {
                    if (record.siteId == this.state.onSelectLength[0]) {
                        return (
                            <div>
                                <Popconfirm title="确认删除该条信息?" onConfirm={() => this.onDelete(record._id)}>
                                    <a href="#" style={{
                                        marginRight: 10
                                    }}>删除</a>
                                </Popconfirm>

                                <a
                                    href="javascript:;"
                                    style={{
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                        border: 0,

                                        borderLeft: 1,
                                        borderStyle: "solid",
                                        borderColor: "#108ee9"
                                    }}
                                    onClick={this
                                        .editModal
                                        .bind(this, record)}>编辑</a>
                            </div>
                        )

                    }
                }
            }
        ];
        const {getFieldDecorator} = this.props.form;
        const {formLayout} = this.state;
        const buttonItemLayout = {
            wrapperCol: {
                offset: 12,
                span: 1
            }
        };
        var _this = this

        const hasSelected = this.state.onSelectLength > 0;
        return (
            <Row>
                <Col span={24}>
                    <Button.Group>
                        <Button
                            style={{
                                marginBottom: 10
                            }}
                            type="primary"
                            disabled={!hasSelected}
                            onClick={this
                                .addCate
                                .bind(this)}>
                            添加
                        </Button>
                    </Button.Group>
                    <Modal
                        onCancel={this
                            .handleCancel
                            .bind(this)}
                        title={this.state.ModalTitle}
                        visible={this.state.visible}
                        // width={1000}
                        footer={null}>
                        <div ref="bbbbbb">
                            <Form
                                layout={formLayout}
                                onSubmit={this
                                    .nodeSubmit
                                    .bind(this)}>
                                <FormItem label="权限名称" {...formItemLayout}>
                                    {getFieldDecorator('name', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入权限名称!'
                                            }
                                        ]
                                    })(<Input placeholder=""/>)}
                                </FormItem>
                                <FormItem label="urls" {...formItemLayout}>
                                    {getFieldDecorator('urls', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入urls'
                                            }
                                        ]
                                    })(<Input placeholder=""/>)}
                                </FormItem>


                                <FormItem {...buttonItemLayout}>
                                    <Button type="primary" loading={this.state.submitLoading} htmlType="submit">
                                        提交
                                    </Button>
                                </FormItem>
                            </Form>
                        </div>
                    </Modal>
                    <Table
                        bordered
                        dataSource={this.props.state.userLogin.accesstableData}
                        columns={columns}
                        size="small"
                        pagination={{total: this.props.state.userLogin.accesstotal}}
                        onChange={this.handleTableChange.bind(this)}
                        loading={this.state.loading}
                        rowKey="_id"
                    />
                    <Modal
                        visible={this.state.tableImagesVisible}
                        footer={null}
                        onCancel={this
                            .handleCancel
                            .bind(this)}>
                        <img
                            alt="example"
                            style={{
                                width: '100%'
                            }}
                            src={this.state.previewImage}/>
                    </Modal>
                </Col>
            </Row>
        )
    }
}


const mapStatetoProps = (state => {
    return {state}
});
const actionCreators = {accessFn}
Access = connect(mapStatetoProps, actionCreators)(Access)
Access = Form.create({})(Access);
export default Access

