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
    AutoComplete,
    Upload
} from 'antd';
import moment from 'moment';
const InputGroup = Input.Group;
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
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const history = createHistory();
import fetch from '../component/fetch';
import {ArticleFn,refund} from "../actions/index.redux";
class ArticleList extends React.Component {
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
            values:null,
            pageSize:10
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
        this.props.ArticleFn('delete', {_id: key}).then(data => {
            message.info(data.msg);
            this.searchSite()
        })
    }
    refund(data) {
        // message.info('功能关闭');
        if(data.result_code==='已付款'||data.result_code!=='已退款'){
            this.props.refund(data).then(res => {
                message.info(res.err_code_des);
                this.searchSite()
            })
        }else{
            message.info('订单未完成支付或已退款');
        }
    }

    // 添加按钮
    addCate() {
        this
            .props
            .form
            .resetFields();
        console.log(this.state.fileList)
        this.setState({
            submitLoading: false,
            visible: true,
            ModalTitle: '添加文章',
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
        this.props.ArticleFn('query').then(data => {
            data.status != 'ok' ? message.info(data.msg) : null;
            this.setState({loading: false,tableData:this.props.state.userLogin.tableData})
        })



    }

    searchSubmit(e) {
        e.preventDefault();
        this
            .props
            .form
            .validateFields(['account','result_code','payDate'],(err, values) => {
                var formData = this
                    .props
                    .form
                    .getFieldsValue();
                if (!err) {

                    if(values['payDate']&&values['payDate']!==undefined
                    ){
                        console.log(values['payDate'][0].format('YYYY-MM-DD'));
                        console.log(values['payDate'][1].format('YYYY-MM-DD'));
                        console.log(values);
                        values.startTime=values['payDate'][0].format('YYYY-MM-DD');
                        values.endTime=values['payDate'][1].format('YYYY-MM-DD');
                    }else{
                        delete values.payDate;
                    }
                    this.setState({
                        values:values
                    });
                    this.props.ArticleFn('search', Object.assign({pageSize:this.state.pageSize,search: this.state.searchText},values)).then(data => {
                        this.setState({
                            loading: false
                        })
                    });

                }
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
                    console.log(values, formData)
                    this.setState({submitLoading: true});
                    if (this.state.ModalTitle == "编辑文章") {
                        if (values.image !== undefined) {
                            values.image = values.image.file.response.name
                        }
                        fetch('article', Object.assign({
                            type: 'edit',
                            _id: this.state.setSiteId,
                            updatedAt:new Date()
                        }, values)).then(data => {
                            message.info(data.msg);
                            this.setState({submitLoading: false, visible: false});
                            this.searchSite()
                        })
                    } else {
                        if(values != undefined &&values.image !== undefined){
                            values.image = values.image.file.response.name
                        }
                        fetch('article', Object.assign({type: 'add',createdAt:new Date()}, values)).then(data => {
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

    }
    //编辑 分类
    editModal(ev) {

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
                    loading: false,
                    searchText:null
                })
            })
        }
    }

    handleTableChange(pagination,size,filters, sorter) {
        this.setState({loading: true});
        console.log(this.state.pageSize,pagination);
        if (this.state.searchText === null&&this.state.values === null
        ) {
            this.props.ArticleFn('query', {current: pagination.current,pageSize:pagination.pageSize}).then(res => {
                this.setState({loading: false,tableData:this.props.state.userLogin.tableData,pageSize:pagination.pageSize});
            })
        } else {
            this.props.ArticleFn('search', Object.assign({current: pagination.current, pageSize:pagination.pageSize,search: this.state.searchText},this.state.values)).then(res => {
                this.setState({loading: false,tableData:this.props.state.userLogin.tableData,pageSize:pagination.pageSize});
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
                title: '充值账号',
                dataIndex: 'account',
                className: 'column-center',
                width: 180,
                key: 'account',
                sorter: (a, b) => a.account.length - b.account.length,
            }, {
                title: '是否同步',
                dataIndex: 'sync',
                className: 'column-center',
                width: 180,
                render: (text) => {
                    return (
                        <div
                            style={{
                                textOverflow: 'ellipsis',
                                display: 'inline-block',
                                height: '30.5px',
                                overflow: 'hidden',
                                padding: '6px 8px',
                                lineHeight:'20px'
                                // width: '180px',
                                // whiteSpace: 'nowrap'
                            }}>
                            {text}
                        </div>
                    )
                },
                key: 'sync'
            }, {
                title: '昵称',
                dataIndex: 'nickname',
                className: 'column-center',
                width: 150,
                key: 'nickname',
                // render: (text, record) => {
                //     // console.log(record.image)
                //     return (<img
                //         style={{
                //             width: 20,
                //             height: 20,
                //             cursor: 'pointer'
                //         }}
                //         onClick={this
                //             .showImages
                //             .bind(this)}
                //         src={serverSrc.url + 'serverPublic/images/' + record.image}/>);
                // }
            }, {
                title: '交易时间',
                dataIndex: 'updatedAt',
                className: 'column-center',
                width: 190,
                key: 'updatedAt',
                render: (text, record) => {
                    return (moment(text).format('YYYY-MM-DD'));
                }
            }, {
                title: '充值金额',
                className: 'column-center',
                dataIndex: 'total_fee',
                width: 100,
                key: 'total_fee',
                sorter: (a, b) => a.total_fee - b.total_fee,
            }, {
                title: '支付结果',
                dataIndex: 'result_code',
                className: 'column-center',
                width: 100,
                key: 'result_code',
            }, {

                title: '商户ID ',
                dataIndex: 'mch_id',
                className: 'column-center',
                width: 120,
                key: 'mch_id',
            }, {
                title: '预订单号',
                dataIndex: 'out_trade_no',
                className: 'column-center',
                width: 300,
                key: 'out_trade_no',
                filterDropdown: (
                    <div className="custom-filter-dropdown" ref="DropdownVb">
                        <Input
                            ref={ele => this.searchInput = ele}
                            placeholder="Search 预订单号"
                            value={this.state.searchText}
                            onChange={this
                                .onInputChange
                                .bind(this)}
                            onPressEnter={this
                                .onSearch
                                .bind(this)}/>
                        <Button
                            type="primary"
                            onClick={this
                                .onSearch
                                .bind(this)}>Search</Button>
                    </div>
                ),
                filterIcon: <Icon
                    type="search"
                    style={{
                        color: this.state.filtered
                            ? '#108ee9'
                            : '#aaa'
                    }}/>,
                filterDropdownVisible: this.state.filterDropdownVisible,
                onFilterDropdownVisibleChange: (visible) => {
                    this.setState({filterDropdownVisible: visible})
                }
            }, {
                title: '支付平台订单号',
                dataIndex: 'transaction_id',
                className: 'column-center',
                width: 320,
                key: 'transaction_id'
            }, {
                title: '银行类型',
                className: 'column-center',
                dataIndex: 'bank_type',
                width: 70,
                key: 'bank_type',

            }, {
                title: '币种',
                className: 'column-center',
                dataIndex: 'trade_type',
                width: 70,
                key: 'trade_type'
            }, {

                title: '支付账号ID',
                dataIndex: 'openid',
                className: 'column-center',
                width: 200,
                key: 'openid',

            },  {

                title: '支付设备编号',
                dataIndex: 'device_info',
                className: 'column-center',
                width: 100,
                key: 'device_info',
            },{
                title: '操作',
                dataIndex: 'operation1',
                className: 'column-center',
                width: 180,
                fixed: 'right',
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
                                <Popconfirm title="确认退款?" onConfirm={() => this.refund(record)}>
                                    <a href="#" style={{
                                        marginRight: 10,border: 0,
                                        borderLeft: 1,
                                        paddingLeft: 10,
                                        borderStyle: "solid",
                                        borderColor: "#108ee9"
                                    }}>退款</a>
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
        const props2 = {
            action: '//47.74.13.45:3333/upload',
            accept: 'video/*',
            listType: 'picture',
            fileList: this.state.fileList,
            defaultFileList: this.state.defaultFileList,
            className: 'upload-list-inline',
            onRemove() {
                _this.props.form.setFieldsValue({
                    image: undefined,
                })
                _this.setState({fileList: []});
            },
            // defaultFileList:this.state.fileList,
            onChange(info) {
                // console.log(info.fileList ,111)
                // if (info.file.status !== 'uploading') {
                //
                // }
                // if (info.file.status === 'done') {
                //     message.success(`${info.file.name} file uploaded successfully`);
                //     // this.setState({
                //     //     fileList:info.fileList
                //     // })
                //     // info.fileList=[];
                // } else if(info.file.status === 'error') {
                //     message.error(`${info.file.name} file upload failed.`);
                // }
                let fileList = info.fileList;

                // 1. Limit the number of uploaded files
                //    Only to show two recent uploaded files, and old ones will be replaced by the new
                fileList = fileList.slice(-1);

                // 2. read from response and show file link
                fileList = fileList.map((file) => {
                    if (file.response) {
                        // Component will show file.url as link
                        file.url = file.response.url;
                    }
                    return file;
                });

                console.log(info)
                _this.setState({fileList: fileList});
            },
        };
        const hasSelected = this.state.onSelectLength > 0;
        return (
            <Row>
                <Col span={24}>
                    <Row style={{marginBottom:20}}>
                        <Form
                            layout={formLayout}
                            onSubmit={this
                                .searchSubmit
                                .bind(this)}>
                        <Col span={6}  >
                            <FormItem label="充值账号" labelCol={{span:6 }}
                                      wrapperCol={{span:15,offset:1}}>
                                {getFieldDecorator('account', {
                                    rules: [
                                        {
                                            required: false,
                                            message: '请输入文充值账号!'
                                        }
                                    ]
                                })(<Input placeholder=""/>)}
                             </FormItem>


                        </Col>
                        <Col span={6}  >
                            <FormItem label="交易结果" labelCol={{span:6 }}
                                wrapperCol={{span:15,offset:1}}>
                                {getFieldDecorator('result_code', {
                                    rules: [
                                        {
                                            required: false,
                                            message: '请输入充值账号!'
                                        }
                                    ]
                                })( <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a person"
                                    optionFilterProp="children"

                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                    <Option value="付款中">付款中</Option>
                                    <Option value="已付款">已付款</Option>
                                    <Option value="已退款">已退款</Option>
                                </Select>)}
                            </FormItem>
                        </Col>
                        <Col span={8}  >
                            <div>
                                <FormItem label="交易时间" labelCol={{span:6 }}
                                          wrapperCol={{span:15,offset:1}}>
                                    {getFieldDecorator('payDate', {
                                        rules: [
                                            {
                                                required: false,
                                                message: '请输入充值账号!'
                                            }
                                        ]
                                    })(<RangePicker
                                    />)}
                                </FormItem>
                            </div>
                        </Col>

                        <Col span={2}  offset={2}>
                            <Button  type="primary"  htmlType="submit" loading={this.state.submitLoading} icon="search">查询</Button>

                        </Col>
                        </Form>
                    </Row>
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
                                <FormItem label="标题" {...formItemLayout}>
                                    {getFieldDecorator('title', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入名称!'
                                            }
                                        ]
                                    })(<Input placeholder=""/>)}
                                </FormItem>
                                <FormItem label="跳转链接" {...formItemLayout}>
                                    {getFieldDecorator('url', {
                                        rules: [
                                            {
                                                required: false,
                                                message: '请输入文章跳转地址'
                                            }
                                        ]
                                    })(<Input placeholder=""/>)}
                                </FormItem>
                                <FormItem label="简介" {...formItemLayout}>
                                    {getFieldDecorator('shortDescription', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入名称文章简介'
                                            }
                                        ]
                                    })(<TextArea
                                        placeholder="description"
                                        autosize={{
                                            minRows: 2,
                                            maxRows: 6
                                        }}/>)}
                                </FormItem>

                                <FormItem label="作者" {...formItemLayout}>
                                    {getFieldDecorator('author', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入文章作者!'
                                            }
                                        ]
                                    })(<Input placeholder=""/>)}
                                </FormItem>
                                <FormItem label="视频" {...formItemLayout}>
                                    {getFieldDecorator('image', {
                                        rules: [
                                            {
                                                required: false,
                                                message: '请上传视频!'
                                            }
                                        ]
                                    })(
                                        <Upload {...props2}>
                                            <Button>
                                                <Icon type="upload"/> upload
                                            </Button>
                                        </Upload>
                                    )}
                                </FormItem>


                                <FormItem label="是否显示" {...formItemLayout}>
                                    {getFieldDecorator('publish', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请选择是否显示'
                                            }
                                        ]
                                    })(
                                        <RadioGroup size="large">
                                            <Radio value={1}>是</Radio>
                                            <Radio value={0}>否</Radio>
                                        </RadioGroup>
                                    )}
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
                        dataSource={this.props.state.userLogin.tableData}
                        columns={columns}
                        size="small"
                        pagination={{pageSizeOptions:['10','30','80','100','300','500','1000','3000'],total: this.props.state.userLogin.total,showSizeChanger:true}}
                        onChange={this.handleTableChange.bind(this)}
                        rowKey="_id"
                        scroll={{
                            x: 2500
                        }}
                        loading={this.state.loading}/>
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
const actionCreators = {refund,ArticleFn}
ArticleList = connect(mapStatetoProps, actionCreators)(ArticleList)
ArticleList = Form.create({})(ArticleList);
export default ArticleList

