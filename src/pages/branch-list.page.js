import React from "react";
import { connect } from "react-redux";
import { Container, Card } from "react-bootstrap";
import { getBranches } from "../data/actions/branch.actions";

export const BaseBranchListPage = ({ loading, branches, error, getAllBranches }) => {
  getAllBranches();
  return (
    <Container>
      <Card>
        <h3 className="text-center">Branches</h3>
      </Card>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.branches.loading,
    branches: state.branches.branches,
    error: state.branches.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllBranches: () => dispatch(getBranches())
  }
}

export const BranchListPage = connect(mapStateToProps, mapDispatchToProps)(BaseBranchListPage);